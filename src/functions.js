const name = document.querySelector("#name");
const number = document.querySelector("#number");
const btnAdd = document.querySelector("#btn_add");
const btnDelete = document.getElementsByClassName("material-symbols-outlined");

btnAdd.addEventListener("click", () => {
  if (name.value === "" || number.value === "") {
    return alert("Name & Number must be specified");
  } else {
    window.location.href = `add/${name.value}/${number.value}`;
  }
});

for (let i of btnDelete) {
  i.addEventListener("click", () => {
    let id = i.getAttribute("id");
    window.location.href = `delete/${id}`;
  });
}
