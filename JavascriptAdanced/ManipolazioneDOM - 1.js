function addProduct() {
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createTextNode(" " + input.value);

    li.appendChild(checkbox);
    li.appendChild(text);
    ul.appendChild(li);

    input.value = ""; 
  }
}
