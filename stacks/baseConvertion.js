function baseConverter(decNumber, base) {
  let reststack = [],
    rest,
    baseString = "",
    digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    reststack.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  while (reststack.length > 0) {
    baseString += digits[reststack.pop()];
  }

  return baseString;
}

console.log(baseConverter(123, 16));
