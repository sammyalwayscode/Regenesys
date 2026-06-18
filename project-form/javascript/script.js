// alert("Hello from javascript");

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameFirst = document.getElementById("firstName").value;
  const nameLast = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //   alert(`${nameFirst} ${nameLast}`);
  document.getElementById("firstMessage").textContent = `${nameFirst}`;
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("submitButton");
const closeModal = document.getElementById("closeButton");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// function modOpen(){
//     modal.style.display = "flex"
// }
