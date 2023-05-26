/*
Primitive Types:

Number: Represents numeric values. It can be either an integer or a floating-point number.
String: Represents textual data enclosed in single quotes ('') or double quotes ("").
Boolean: Represents either true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Symbol: Represents a unique identifier. Symbols are primarily used to create property keys that are not accessible by regular iteration.
*/

function createAndPrintVariableOfEachPrimitiveJsType() {
  const srt = "asd";
  const num = 1;
  const bln = true;
  let a;
  const nullValue = null;
  const symbol = Symbol("symbol");

  console.log(srt, num, bln, a, nullValue, symbol);
}
