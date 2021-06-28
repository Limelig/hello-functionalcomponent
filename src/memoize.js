function add(a, b) {
  // console.log("beep");

  const key = "${a}+${b}";
  const value = add["cache"][key];
  if (value) {
    console.log("cache hit");

    return value;
  }

  console.log("계산");
  const result = a + b;
  add["cache"][key] = result;
  return result;
}

add["cache"] = {};

console.log(add.cache);
add(1, 2);
add(1, 2);
add(1, 2);
