alert("Olá, mundo!");
let Name = prompt("Por favor, digite seu nome:");

if (Name) {
  alert("Olá e bem vindo(a), " + Name + "!");
}

else {
  alert("Olá e bem vindo(a), estranho(a)!");
}

Array.from(document.getElementsByClassName("Name")).forEach(element => {
  element.textContent = Name || "estranho(a)";
});
