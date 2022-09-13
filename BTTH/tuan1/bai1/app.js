const app = document.getElementById("app");
const inputNameElement = document.createElement("input");
inputNameElement.setAttribute("type", "text");
inputNameElement.setAttribute("placeholder", "Enter name...");

const inputPassElement = document.createElement("input");
// inputPassElement.className = "input "
inputPassElement.setAttribute("type", "password");
inputPassElement.setAttribute("placeholder", "Enter Pass...");

const btnSubmit = document.createElement("button");
btnSubmit.innerText = "Submit";

app.appendChild(inputNameElement);
app.appendChild(inputPassElement);
app.appendChild(btnSubmit);
