function sidebarChangeState(sidebarTarget, button) {

    const open = JSON.parse(localStorage.getItem("open." + sidebarTarget));

    const sidebar = document.querySelector('#' + sidebarTarget);

    if (sidebar) {

        if (open) {
            sidebar.style.left = "0";

        } else {
            sidebar.style.left = "-200px";

        }

        if (document.querySelector('.page-content')) {

            const page = document.querySelector('.page-content');

            if (open) {
                page.style.paddingLeft = "200px";
            } else {
                page.style.paddingLeft = "0";
            }
        }
    }
}

if (document.querySelector(".sidebar-toggle")) {

    const buttons = document.querySelectorAll(".sidebar-toggle");

    buttons.forEach(button => {

        const targetName = button.getAttribute('target');

        if (button.textContent === "") {
            button.textContent = "☰";
        }

        if (localStorage.getItem("open." + targetName) == undefined) {
            localStorage.setItem("open." + targetName, true)
        }

        button.addEventListener("click", () => {
            console.log("click");
            localStorage.setItem("open." + targetName, !JSON.parse(localStorage.getItem("open." + targetName)));
            sidebarChangeState(targetName, button);
        })

        setTimeout(() => {
            sidebarChangeState(targetName, null);
        },.1)

    });
}

if (document.querySelector(".dock-alert")) {
    const alerts = document.querySelectorAll(".dock-alert");

    alerts.forEach(alertdock => {

        if (alertdock.getAttribute('remember') != undefined) {
            if (localStorage.getItem('alert' + alertdock.id)) {
                alertdock.remove();
            } else {
                localStorage.setItem('alert' + alertdock.id, true);
            }
        }

        if (alertdock.getAttribute('autoclose')) {
            const sec = alertdock.getAttribute('autoclose');
            if (!isNaN(sec)) {
                setInterval(() => {
                    alertdock.style.display = 'none';
                }, sec*1000)
            }
        }

    });
}

if (document.querySelector(".dock-button")) {

    const buttons = document.querySelectorAll(".dock-button");

    buttons.forEach(button => {

        const targetName = button.getAttribute('dock-id');

        button.addEventListener("click", () => {
            if (dock = document.querySelector('#' + targetName)) {
                const dock = document.querySelector('#' + targetName);
                dock.style.display = "flex";
            }
        })

        sidebarChangeState(targetName, null);

    });
}

if (document.querySelector(".dock-close")) {

    const buttons = document.querySelectorAll(".dock-close");

    buttons.forEach(button => {

        const targetName = button.getAttribute('dock-id');

        button.addEventListener("click", () => {
            const dock = document.querySelector('#' + targetName);
            dock.style.display = "none";
        })

        sidebarChangeState(targetName, null);

    });
}

if (document.querySelector(".loadingscreen")) {

    const html = document.querySelector("html");

    html.style.overflow = "hidden";
    
    const loadingscreen = document.querySelector(".loadingscreen");

    if (loadingscreen.getAttribute("loadingtime")) {
        const loadingtime = loadingscreen.getAttribute("loadingtime");

        setTimeout(() => {
            setTimeout(() => {
                loadingscreen.classList.add("remove-fade");
                setTimeout(() => {
                    loadingscreen.remove();
                    html.style.overflow = "initial";
                }, 500)
            }, 500)
        }, loadingtime)

        if (loadingscreen.getAttribute("progressbar-id")) {
            
            const progressbar = document.querySelector("#" + loadingscreen.getAttribute("progressbar-id"));

            if (progressbar) {
                for (let i = 0; i < loadingtime; i++) {
                    setTimeout(() => {
                        progressbar.setAttribute('progress', ((95/loadingtime)*i+5));
                    },i)
                }
            }
        }

    }

}

if (document.querySelector(".progressbar")) {
    const progressbars = document.querySelectorAll(".progressbar");
    
    progressbars.forEach(progressbar => {
        const bar = document.createElement("div");

        bar.className = "bar";

        progressbar.appendChild(bar);

        const progress = progressbar.getAttribute("progress")

        if (progress) {
            setInterval(() => {
                let progress = progressbar.getAttribute("progress");
                bar.style.width = (progress) + "%";
            }, 2)
        }
    });

}

if (document.querySelector(".text-sequence")) {
    const items = document.querySelector(".text-sequence");

    items.forEach(item => {
        
    });
    
}