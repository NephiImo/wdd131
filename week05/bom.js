// Create elements with correct tag names
const input = document.createElement("input");
input.setAttribute("id", "favchap");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter chapter");

const button = document.createElement("button");
button.textContent = "Add Chapter";

const list = document.createElement("ul");

// Append input, button, and list to the document body (or a container)
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(list);

button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Please enter a chapter.");
        input.focus();
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();    
});

const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));