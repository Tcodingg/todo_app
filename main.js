var input = document.querySelector("#inputVal");
const submit = document.querySelector("#submit");
const itemList = document.querySelector(".item-list");
const container = document.querySelector(".container");

submit.addEventListener("click", items);

function items() {
  let inputValue = input.value;
  function todos(inputValue) {
    const div = document.createElement("div");
    itemList.appendChild(div);

    const inputItem = document.createElement("input");
    inputItem.value = inputValue;
    inputItem.disabled = true;
    div.appendChild(inputItem);

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-remove-button");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("edit-remove-button");

    div.appendChild(editButton);
    div.appendChild(removeButton);

    editButton.addEventListener("click", () => {
      inputItem.disabled = false;
      editButton.innerHTML = "Done";
    });

    removeButton.addEventListener("click", () => {
      container.removeChild(div);
    });
  }
  todos(inputValue);
}
