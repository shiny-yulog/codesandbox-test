/**
 * const,letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "cosnt変数";
// console.log(val3);

// val3 = "let変数を上書き";
// console.log(val3);

// const val4 = {
//   name:"ゆうき",
//   age:"30",
// };

// val4.name = "yuki";
// val4.address = "wakayama";

// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("mokey");
// console.log(val5);

// const name = "ゆうき";
// const age = "28";

// const message = "私の名前は"　+ name + "です。年齢は" + age + "です。";
// console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"))

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

// const myProfile = {
//   name: "ゆうき",
//   age: 30,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['ゆうき', 30];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

const sayHello = (name = "ゲスト") => {
  return console.log(`こんにちは${name}さん！`);
};
sayHello("shiny");
sayHello();
