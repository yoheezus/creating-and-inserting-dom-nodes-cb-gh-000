//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var newNode = document.createElement("div");
newNode.innterHTML = "I've been put here by JavaScript!";
newNode.style.backgroundColor = "#f9f9f9";
newNode.style.textAlign = "center";

var ul = document.createElement("ul")

for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    li.innterHTML = (i + 1).toString()l;
    ul.appendChild(li);
}

element.appendChild(ul);
