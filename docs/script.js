// Grab all needed variables
const userId = localStorage.getItem('userId');
const container = document.querySelector(".container");
const loginBtn = document.querySelector(".loginBtn");
const signUpBtn = document.querySelector(".signUpBtn");

// Send user to correct sing up or login page
signUpBtn.addEventListener("click", () => {
    window.location.href = "signUp.html";
})

loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
})

// If user is signed in, do the following
if(userId){
    container.remove();
    const buttonsContainer = document.createElement("div");
    buttonsContainer.innerHTML = `
        <button class = "loginBtn">Add Budget +</button>
        <button class = "loginBtn">Add Task +</button>
    `;
    document.body.appendChild(buttonsContainer);

    const signOutConatiner = document.createElement("div");
    signOutConatiner.innerHTML = `
        <button class = "signOutBtn">Sign Out</button>
    `;
    document.body.appendChild(signOutConatiner);

    // Signs user out
    const signOutBtn = document.querySelector(".signOutBtn");
    signOutBtn.addEventListener("click", () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("email");

        window.location.href = "index.html";
    });
}







