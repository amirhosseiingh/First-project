const username = document.getElementById("userName-input");
const password = document.getElementById("password-input");
const modalBox = document.getElementById("modal-box");
const finalModal = document.getElementById("final-modal");
const firstNameElement = document.getElementById("firstName-element");
const passwordError = document.getElementById("password-error");
let loading = false;

const loginUser = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => { 
        if (username === "admin" && password === "12345678") {
            resolve({
              username: "admin",
              name: "amirhossein",
              token: "vjfkltgf4ffr33",
            });
          } else {
            reject({
              error: "password is incorrect",
            });
          }       
    }, 2000);
  });

function submitButton() {
    if (password.value.length === 8) { 
        passwordError.style.display = "none";
        if (!loading) {
            loading = true;
            loadingHandler();
            loginUser(username.value, password.value)
              .then((data) => {
                localStorage.setItem("userName", data.username);
                localStorage.setItem("name", data.name);
                localStorage.setItem("userToken", data.token);
                loading = false
                loadingHandler();
                loggedInHandler();
              })
              .catch((err) => {
                console.error(err.error);
                loading = false
                loadingHandler();
              });
        } 
    }else{
      passwordError.style.display = "block";

    }
}
function loadingHandler() {
    if (loading) {
        modalBox.style.display = "flex";
    }else{
        modalBox.style.display = "none"
    }
    
}
function loggedInHandler() {
    let name = localStorage.getItem("name");
    firstNameElement.innerHTML = name;
    finalModal.style.display = "flex";
}
alert("hello")
 
