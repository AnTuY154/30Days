const boxInputList = document.querySelector(".box_input-list");
const input = document.querySelector(".box_input input");
const button = document.querySelector(".box_button button")

function removeTag(node) {
  boxInputList.removeChild(node);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function createTag(text) {
  const node = document.createElement("div");
  node.className = "box_input-list-item";
  // Create a text node:
  const textnode = document.createTextNode(text);
  node.appendChild(textnode);

  const icon = document.createElement("i");
  icon.className = "bx bx-x";
  icon.addEventListener("click", () => removeTag(node));
  node.appendChild(icon);
  boxInputList.appendChild(node);
}

input.addEventListener("keydown", (e) => {
  const text = e.target.value;
  if (e.keyCode === 13 && text && text.trim() !== "") {
    createTag(text.trim());
    e.target.value = "";
  }
});

button.addEventListener('click', () => removeAllChildNodes(boxInputList))

input.focus()
