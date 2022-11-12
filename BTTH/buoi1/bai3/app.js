const list = document.getElementById("list");
let listTodo;
const renderData = (item) => {
  const liElement = document.createElement("li");
  liElement.innerHTML = `${item.title}`;
  list.appendChild(liElement);
};
const changeData = (json) => {
  json.forEach((item) => renderData(item));
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => changeData(json));
