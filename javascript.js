
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const botonGuardar = document.querySelector(".seccion-boton button");

let estados = JSON.parse(localStorage.getItem("comidasMascotas")) || {};

checkboxes.forEach((cb, index) => {
  if (estados[index]) cb.checked = true;
  if (!cb.id) cb.id = "checkbox-" + index;
});

botonGuardar.addEventListener("click", (e) => {
  e.preventDefault();

  checkboxes.forEach((cb, index) => {
    estados[index] = cb.checked;
  });

  localStorage.setItem("comidasMascotas", JSON.stringify(estados));
  alert("✅ Guardado!");
});
