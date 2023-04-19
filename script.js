const passwordInput = document.querySelector(".pass-field input"),
eyeIcon = document.querySelector(".pass-field i"),
requirementsList = document.querySelectorAll(".requirement-list li");

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" 
    ? "text" : "password"; //เปลี่ยนจาก text to password to text
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type
    === "password" ? "" : "-slash"}`; //เปลี่ยน icon เมื่อกดที่ icon
});

const requirements = [
    {regex : /.{8,}/, index : 0},
    {regex : /[A-Z]/, index : 1},
    {regex : /[a-z]/, index : 2},
    {regex : /[0-9]/, index : 3},
    {regex : /[^A-Za-z0-9]/, index : 4}
]
passwordInput.addEventListener("keyup" , (e) =>{
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requimentsItem = requirementsList[item.index];
        if (isValid) {
            requimentsItem.firstElementChild.className = "fa-solid fa-check";
            requimentsItem.classList.add("valid");
        } else {
            requimentsItem.firstElementChild.className = "fa-solid fa-circle";
            requimentsItem.classList.remove("valid");
        }
    });
});