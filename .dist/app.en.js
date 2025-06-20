alert("Hello, World!");
let Name = prompt("Please, enter your name:");

if (Name) {
  alert("Hello and welcome, " + Name + "!");
}
else {
  alert("Hello and welcome, stranger!");
}

Array.from(document.getElementsByClassName("Name")).forEach(element => {
  element.textContent = Name || "stranger";
});