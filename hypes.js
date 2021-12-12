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

if (document.querySelector(".modal-alert")) {
    const alerts = document.querySelectorAll(".modal-alert");

    alerts.forEach(alertModal => {

        console.log("found alert Modal");

        if (alertModal.getAttribute('remember')) {
            if (localStorage.getItem('alert' + alertModal.id)) {
                alertModal.remove();
                console.log("remove");
            } else {
                localStorage.setItem('alert' + alertModal.id, true);
                console.log("found alert Modal");
            }
        }

    });
}

if (document.querySelector(".modal-button")) {

    const buttons = document.querySelectorAll(".modal-button");

    buttons.forEach(button => {

        const targetName = button.getAttribute('modal-id');

        button.addEventListener("click", () => {
            if (modal = document.querySelector('#' + targetName)) {
                const modal = document.querySelector('#' + targetName);
                modal.style.display = "flex";
            }
        })

        sidebarChangeState(targetName, null);

    });
}

if (document.querySelector(".modal-close")) {

    const buttons = document.querySelectorAll(".modal-close");

    buttons.forEach(button => {

        const targetName = button.getAttribute('modal-id');

        button.addEventListener("click", () => {
            const modal = document.querySelector('#' + targetName);
            modal.style.display = "none";
        })

        sidebarChangeState(targetName, null);

    });
}