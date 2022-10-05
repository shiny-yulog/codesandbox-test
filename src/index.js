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
    //押された完了ボタンの親タグliを削除
    const compChild = compButton.parentNode;
    delFromUncompleteList(compChild.parentNode);

    //完了リストに追加する要素
    const addChild = compButton.parentNode;
    // const addTarget = addChild.parentNode;

    //TODo内容テキスト取得
    const text = addChild.firstElementChild.innerText;

    //div(list-flex)以下を初期化
    addChild.textContent = null;

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //button(戻す)タグを追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
  });

  //button(削除)タグを生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親タグliを削除
    const delChild = delButton.parentNode;
    delFromUncompleteList(delChild.parentNode);
    // const delTarget = delChild.parentNode;
    // document.querySelector(".uncomplete-list").removeChild(delTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // divタグの子要素にp要素を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);

  console.log(li);

  //未完了リストに追加
  document.querySelector(".uncomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除

const delFromUncompleteList = (target) => {
  document.querySelector(".uncomplete-list").removeChild(target);
};

document
  .querySelector(".add-button")
  .addEventListener("click", () => onClickAdd());
