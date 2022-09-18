import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

var: instruccionesTorta: { [key: string] : string; } = {
  Receta: "-Receta de torta-",
  paso1: "Prender horno",
  paso2: "Mezclar azucar, huevos y escencia de vainilla",
  paso3: "Agregar harina",
  paso4: "Precalentar horno",
  paso5: "Prender horno"
}

let claves = Object.keys(instruccionesTorta);
for (let i=0; i< claves.length; i++){
  let clave = claves[i];
  console.log(instruccionesTorta[clave]);
}
