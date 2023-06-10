export class Router {

  routes = {};


  add(routeName,page){
    this.routes[routeName] = page;
  }


  //evitar que evento dispare por default
  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  //vai ser responsável por renderizar a página

  handle() {
    const { pathname } = window.location;

    const route = this.routes[pathname] || this.routes[404];

    //fetch é uma função que faz requisições http promisses assincronas

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
