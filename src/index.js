import navbar from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
//import "../styles/index.css";
import { getData, append } from "../component/fetch&&append";
//document.querySelector("#navbar").innerHTML = navbar();
let id;

let container = document.getElementById("container");

search.addEventListener("input", () => {
  let search = document.getElementById("search");
  let key = `nvkRsg4G3nn_5XRp2ZKKc9_XXhQ07sMuSiuTOIAGspA`;
  let url = `https://api.unsplash.com/search/photos?page=1&query=${search.value}&client_id=${key}`;
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    main(url);
  }, 1000);
});

let main = async (url) => {
  let data = await getData(url);
  append(data.results, container);
};

let url1 = `https://api.unsplash.com/collections?page=1&client_id=nvkRsg4G3nn_5XRp2ZKKc9_XXhQ07sMuSiuTOIAGspA`;
//main(url1);
let getCollection = async () => {
  let res = await fetch(url1);
  let data = await res.json();
  navappend(data);
};
let ul = document.querySelector("#dd");

let navappend = (data) => {
  ul.innerHTML = null;
  data.forEach((e) => {
    let li = document.createElement("li");
    li.innerText = e.title;
    console.log(li);
    li.setAttribute("class", "dropdown-item");
    li.addEventListener("click", () => {
      append(e.preview_photos, container);
    });
    ul.append(li);
  });
};

getCollection();