const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
}

const routes = {
  404: '/pages/404.html' || 'https://raw.githubusercontent.com/hawariMuflihMunte/Vanilla-Router/main/pages/404.html',
  "/": '/pages/index.html' || 'https://raw.githubusercontent.com/hawariMuflihMunte/Vanilla-Router/main/pages/index.html',
  "/about": '/pages/about.html' || 'https://raw.githubusercontent.com/hawariMuflihMunte/Vanilla-Router/main/pages/about.html',
  "/lorem": '/pages/lorem.html' || 'https://raw.githubusercontent.com/hawariMuflihMunte/Vanilla-Router/main/pages/lorem.html'
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
