(this.webpackJsonpzpota=this.webpackJsonpzpota||[]).push([[0],[,,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),n=t(2),c=t.n(n),s=t(3);t(9);function m(){var e=Object(r.useState)(!1),a=Object(s.a)(e,2),t=a[0],n=a[1];return o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:"./images/word.png",alt:"logo-word",className:"logo-word"}),o.a.createElement("img",{src:"./images/logo.png",alt:"logo",className:"logo"}),o.a.createElement("div",{className:t?"navbar drop":"navbar colapse"},o.a.createElement("a",{className:"nav-element",href:"#store"},"Store/Tienda"),o.a.createElement("a",{className:"nav-element",href:"#nosotros"},"Nosotros"),o.a.createElement("a",{className:"nav-element",href:"#footer"},"Contacto")),o.a.createElement("i",{onClick:function(e){n((function(e){return!e}))},className:"fas fa-bars"}))}function l(){return o.a.createElement("div",{className:"banner1"},o.a.createElement("img",{src:"./images/banner-1.jpg",alt:"tabla de asado",className:"tabla-banner"}))}function i(){return o.a.createElement("div",null,o.a.createElement("div",{className:"text-banner1"},o.a.createElement("img",{src:"./images/banner-3.jpg",className:"banner2"})),o.a.createElement("h1",null,"Pasion por la madera"),o.a.createElement("p",{className:"intro"},"Todos nuestros productos son elaborados localmente y terminados a mano usando las mejores maderas del mercado. De ahi surgen nuestras tablas de picar y asado, las bandejas y toda nuestra linea de productos. Seleccionamos cada pieza de madera para que tengas el producto que te merec\xe9s."),o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20",className:"hace order"},o.a.createElement("i",{className:"fas fa-bolt"})," ir a la Tienda!"," ",o.a.createElement("i",{className:"fas fa-bolt"})),o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20",className:"hace order"},"Hac\xe9 tu consulta! ",o.a.createElement("i",{className:"fab fa-whatsapp"})))}t(10);function d(e){var a=e.price,t=e.size,r=e.name,n=e.image,c="https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%201%20".concat(r,"%20de%20").concat(t,"%20");return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-top"},o.a.createElement("img",{className:"pic",src:"./images/".concat(n)})),o.a.createElement("div",{className:"card-bottom"},o.a.createElement("p",{className:"product-name"},r),o.a.createElement("p",{className:"size"},t),o.a.createElement("div",{className:"price-box"},o.a.createElement("p",{className:"price"},"$",a)),o.a.createElement("p",{className:"envio"},"+Costo de env\xedo"),o.a.createElement("a",{href:c},o.a.createElement("button",{className:"buy"},"COMPRAR ",o.a.createElement("i",{className:"fab fa-whatsapp"})))))}var p=[{nombre:"TABLA DE ASADO SMALL",medida:"24x40x2cm",producto:"tabla",precio:1700,image:"tabla-de-asado-small.JPG"},{nombre:"TABLA DE ASADO LARGE",medida:"28x55x2cm",producto:"tabla",precio:2450,image:"tabla-de-asado-large.JPG"},{nombre:"TABLA DE ASADO XL LARGE",medida:"28x50x4cm",producto:"tabla",precio:3950,image:"tabla-de-asado-xl-large.JPG"},{nombre:"TABLA DE ASADO CON AGUJERO",medida:"24x40x2cm",producto:"tabla",precio:1700,image:"tabla-de-asado-agujero.JPG"},{nombre:"TABLA CON MANGO ",medida:"21x40x2cm",producto:"tabla",precio:2100,image:"tabla-con-mango.JPG"},{nombre:"TABLA DE PICADA",medida:"19x38x2cm",producto:"tabla",precio:1800,image:"tabla-de-picada.JPG"},{nombre:"PLATO DE ASADO",medida:"19x35x2cm",producto:"plato",precio:1200,image:"plato-de-asado.JPG"},{nombre:"PLATO DE SUSHI LAQUEADO",medida:"14x23x2cm",producto:"plato",precio:999,image:"plato-de-sushi.JPG"},{nombre:"BANDEJA DE PICADA",medida:"19x35x2cm",producto:"bandeja",precio:1950,image:"bandeja-de-picada.JPG"},{nombre:"BANDEJA SMALL",medida:"24x40x2cm",producto:"bandeja",precio:2300,image:"bandeja-small.JPG"},{nombre:"BANDEJA XL LARGE",medida:"28x55x4cm",producto:"bandeja",precio:5100,image:"bandeja-xl-large.JPG"},{nombre:"ORDENADOR DE ESCRITORIO",medida:"14x30x4cm",producto:"ordenado de escritorio",precio:2400,image:"ordenador-de-escritorio.JPG"},{nombre:"CAJA NESPRESSO",medida:"30x40cm",producto:"caja nespresso",precio:4999,image:"caja-nespresso.JPG"}];t(11);function u(){var e=p;return o.a.createElement("div",{className:"store",id:"store"},o.a.createElement("h1",null,"Tienda!"),o.a.createElement("p",{className:"intro"},"Para adquirir nuestros productos pod\xe9s escribirnos por whatsapp. La madera de cada producto puede ser Zoita, Guayubira o Lenga dependiendo del stock en el momento. Record\xe1 preguntar si quer\xe9s alguna madera en particular!"),o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20",className:"hace order"},o.a.createElement("i",{className:"fas fa-bolt"})," Hac\xe9 tu consulta!"," ",o.a.createElement("i",{className:"fas fa-bolt"})),o.a.createElement("div",{className:"store-box"},o.a.createElement("div",{className:"card-holder"},e.map((function(e,a){return o.a.createElement(d,{key:a,name:e.nombre,price:e.precio,image:e.image,size:e.medida})}))," ")))}t(12);function E(){return o.a.createElement("div",{className:"wood"},o.a.createElement("h1",null,"La mejor madera del mercado"),o.a.createElement("p",{className:"intro"},"Usamos siempre las mejores maderas, las mismas que se ultilizan para fabricar muebles de alta gama. Conocelas en esta secci\xf3n."),o.a.createElement("img",{src:"./images/zoita.jpg",className:"wood-pic"}),o.a.createElement("img",{src:"./images/guayubira.jpg",className:"wood-pic"}),o.a.createElement("img",{src:"./images/lenga.jpg",className:"wood-pic"}),o.a.createElement("img",{src:"./images/banner-4.jpg",alt:"tabla de asado",className:"tabla-banner2","data-aos":"fade-up"}),o.a.createElement("h1",{id:"nosotros"},"Terminacion premium"),o.a.createElement("p",{className:"intro"},"Fabricamos uno a uno nuestros productos y los terminamos a mano, para que cada uno sea perfecto."," "),o.a.createElement("img",{src:"./images/process.jpg",className:"wood-pic"}),o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20",className:"hace order end"},"Contactanos por Whatsapp ",o.a.createElement("i",{className:"fab fa-whatsapp"})))}t(13);function b(){return o.a.createElement("div",{className:"footer",id:"footer"},o.a.createElement("img",{src:"./images/blanco+texto.png",className:"footer-logo",alt:"zoita wood"}),o.a.createElement("p",null,"General Pacheco, Buenos Aires, Argentina"),o.a.createElement("p",null,"Tel / Whatsapp: +54 9 11 6822 0014"),o.a.createElement("a",{href:"https://www.instagram.com/zoitawood/"},o.a.createElement("i",{className:"fab fa-instagram instagram"})))}var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(i,null),o.a.createElement(l,null),o.a.createElement(u,null),o.a.createElement("img",{src:"./images/blanco+texto.png",className:"banner-zoita",alt:"zoita wood"}),o.a.createElement(E,null),o.a.createElement(b,null))};c.a.render(o.a.createElement(g,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.ce098f28.chunk.js.map