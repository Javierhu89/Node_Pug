let div_peli = document.createElement("div");
div_peli.setAttribute("class", "container");
let fieldset_peli = document.createElement("fieldset");
let form_peli = document.createElement("form");
form_peli.setAttribute("action", "/");
form_peli.setAttribute("method", "post");
let input_peli = document.createElement("input");
input_peli.setAttribute("name", "peli");
input_peli.setAttribute("type", "text");
input_peli.setAttribute("class", "input_peli");
input_peli.setAttribute("placeholder", "Introduce una Película");
let input_gen = document.createElement("input");
input_gen.setAttribute("name", "gen");
input_gen.setAttribute("type", "text");
input_gen.setAttribute("class", "input_gen");
input_gen.setAttribute("placeholder", "Introduce un Género");
// let input_leng = document.createElement("input");
// input_leng .setAttribute("name", "leng");
// input_leng .setAttribute("type", "text");
// input_leng .setAttribute("class", "input_leng");
// input_leng .setAttribute("placeholder", "¿En qué idioma quieres verlo?");
let input_sub_peli = document.createElement("input");
input_sub_peli.setAttribute("type","submit");
input_sub_peli.setAttribute("class", "input_sub_peli");
input_sub_peli.setAttribute("value", "Resultados")


form_peli.appendChild(input_sub_peli);
form_peli.appendChild(input_peli);
form_peli.appendChild(input_gen);
// form_peli.appendChild(input_leng)
fieldset_peli.appendChild(form_peli);
div_peli.appendChild(fieldset_peli);
document_peli.body.appendChild(div_peli);

