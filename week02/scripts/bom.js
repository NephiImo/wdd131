const input = document.createElement("#favchap");

const button = document.createElement("button");

const list = document.createElement("ul");

const li = document.createElement("li");
li.textContent = input.value;
li.append(deleteButton);
list.append(li);

const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";

