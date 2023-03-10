// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
    if (theme == "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
};

let setTheme = (theme) => {
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
    changeGiscusTheme();
};

let initTheme = (theme) => {
    if (theme == null || theme == "null") {
        const userPref = window.matchMedia;
        if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
            theme = "dark";
        }
    }

    setTheme(theme);
};

initTheme(localStorage.getItem("theme"));

document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("theme-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    });
});


function changeGiscusTheme() {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ?  'dark_dimmed' : 'light'
    function sendMessage(message) {
        const iframe = document.querySelector('iframe.giscus-frame');
        if (!iframe) return;
        iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
        setConfig: {
            theme: theme
        }
    });
}