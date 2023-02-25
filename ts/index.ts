const routes = {
    "/": "#homepage",
    "/rooms": "#rooms",
    "/contact-us": "#contact"
};

function renderPage(pathname: string) {
    const roomId = routes[pathname as keyof typeof routes]
    const room = document.querySelector(roomId);
    const pages = document.querySelectorAll("[data-page]");

    history.pushState(null, "", pathname);

    pages.forEach(e => e.classList.add("hidden"));
    room?.classList.remove("hidden");
}

document.addEventListener("click", evt => {
    const target = (<HTMLElement>evt.target);

    if (target.matches("[data-link]")) {
        evt.preventDefault();
        const href = (<HTMLAnchorElement>target).href
        const url = new URL(href);

        renderPage(url.pathname);
    }
});

window.addEventListener("load", _ => renderPage(location.pathname));
window.addEventListener("popstate", _ => renderPage(location.pathname));