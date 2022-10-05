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

  //button(完了)タグを生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグを生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親タグliを削除
    const delChild = delButton.parentNode;
    const delTarget = delChild.parentNode;
    document.querySelector(".uncomplete-list").removeChild(delTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // divタグの子要素にp要素を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);

  console.log(li);

  document.querySelector(".uncomplete-list").appendChild(li);
};

document
  .querySelector(".add-button")
  .addEventListener("click", () => onClickAdd());
