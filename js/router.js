const route = (event) => {
    event = event || window.event;
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    handlerRoute()
}

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/gitfolio": "/dist/index.html",
    "/contact": "/pages/contacts.html",
}

const handlerRoute = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]
    const html = await fetch(route).then((data) => data.text())
    document.getElementById("main-page").innerHTML = html
}

window.onpopstate = handlerRoute
window.route = route

handlerRoute()