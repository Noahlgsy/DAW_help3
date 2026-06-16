import './style.css'
import type { Film } from './type';



window.addEventListener("load", (event) => {
  get_film();
  add_button(); 
});

async function get_film() {
  const response = await fetch("http://localhost:8080/Film");
  if (response.ok) {
    const data = await response.json() as Film[];
    display(data);
  }
}

async function add_film(title: string) {
  const response = await fetch("http://localhost:8080/Film",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    }
  );
  if (response.ok) {
    get_film();
  }
}

function display(film: Film[]) {
  const conteneur = document.getElementById("Film");
  if (conteneur === null) return;
  conteneur.innerHTML = "";
  for (const fi of film) {
    const p = document.createElement("p");
    p.textContent = `Title: ${fi.title}`;
    conteneur.appendChild(p);
  }
}

function add_button() {
  const add_button = document.getElementById("Inserer")
  add_button?.addEventListener("click", (event) => {
    const title = (document.getElementById("Ecrire_film") as HTMLInputElement).value;
    add_film(title);
  })
}