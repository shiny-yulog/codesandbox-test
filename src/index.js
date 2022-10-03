import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector(".add-text").value;
  document.querySelector(".add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.className = "list-flex";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // divタグの子要素にp要素を設定
  div.appendChild(p);

  console.log(li);

  document.querySelector(".uncomplete-list").appendChild(li);
};

document
  .querySelector(".add-button")
  .addEventListener("click", () => onClickAdd());
