function sidebarChangeState(sidebarTarget, button) {

    const open = JSON.parse(localStorage.getItem("open." + sidebarTarget));

    const sidebar = document.querySelector('#' + sidebarTarget);

    if (sidebar) {
        if (open) {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-200px";
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

        sidebarChangeState(targetName, null);

    });
}