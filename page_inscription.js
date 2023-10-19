let form = document.querySelector("#form");
let nom = document.querySelector(".nom");
let prenom = document.querySelector(".prenom");
let email = document.querySelector(".email");
let date = document.querySelector(".date");
let mdp = document.querySelector(".mdp");
let confirm = document.querySelector(".confirm");

form.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (nom.value === "" ||
        prenom.value === "" ||
        email.value === "" ||
        date.value === "" ||
        mdp.value === "" ||
        confirm.value === "" ||
        oui.value === ""){
            msg.classList.add("Error");
            msg.innerHTML = "Les champs (*) sont obligtoires";
        setTimeout(()=>{
            msg.classList.remove("Error");
            msg.innerHTML = "";
        }, 2000);
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = `${nom.value},
                        ${prenom.value},
                        ${email.value},
                        ${date.value},
                        ${mdp.value},
                        ${confirm.value}`;
        // userList.appendChild(li);
        // nom.value = "";
        // prenom.value = "";
        // email.value = "";
        // date.value = "";
        // mdp.value = "";
        // confirm.value = "";
        // ouiInput.value = "";
        }
    }    
