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

        console.log("found alert dock");

        if (alertdock.getAttribute('remember')) {
            if (localStorage.getItem('alert' + alertdock.id)) {
                alertdock.remove();
                console.log("remove");
            } else {
                localStorage.setItem('alert' + alertdock.id, true);
                console.log("found alert dock");
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