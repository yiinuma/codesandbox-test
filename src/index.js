/*
 *const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";
// console.log(val2);
// let val2 = "再宣言";

// const変数は上書き不可
// const val3 = "const変数";
// console.log(val3);
// // val3 = "const変数を上書き";
// const val3 = "再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.adress = "Hirosima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat", "human"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5.slice(-1));

/**
 * テンプレート文字列
 */
const name = "yoshihiro";
const age = "100";
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
const message2 = `私の名前は${name}です!!。年齢は${age}です。`;
console.log(message2);
