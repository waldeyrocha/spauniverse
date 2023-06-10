import {Router} from './router.js';


//criar uma instância da classe Router
const router = new Router();


//adicionar as rotas
router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/contact', '/pages/contact.html');
router.add(404, '/pages/404.html');

router.handle();

//evitar que evento dispare por default
window.onpopstate = () => {
  router.handle();
};
//window.route é uma função que é disparada quando o usuário clica em um link
window.route = () => {
  router.route();
};

// javascript object notation npm -init -y = JSON
// npm install -g live-server = instalar o live-server
// live-server = executar o live-server no terminal node js

//polimorfismo é quando uma classe filha sobrescreve um método da classe pai


// class Passaro {
//   voar() {
//     console.log("Voando...");
//   }
// }

// class Papagaio extends Passaro {
//   falar() {
//     console.log("Falando...");
//   }

//   voar() {
//     console.log("Voando como um papagaio...");
//   }

//   //sobrescrever o método voar

// }

// const papagaio = new Papagaio();

// papagaio.voar();
// papagaio.falar();




// // Description: Arquivo responsável por fazer o roteamento da aplicação
// const routes = {

//   //object literal
//   '/': "/pages/home.html",
//   '/about': "/pages/about.html",
//   '/contact': "/pages/contact.html",
//   404: "/pages/404.html",

// }


//inicializar a aplicação
// handle();

//window.onpopstate é um evento que é disparado quando o usuário clica no botão de voltar do navegador
// window.onpopstate = () => {
//   handle();
// };

//window.route é uma função que é disparada quando o usuário clica em um link
// window.route = route;