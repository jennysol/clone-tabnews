function sum(a, b) {
  if (typeof a !== "number") {
    return "error";
  }

  return a + b;
}

exports.sum = sum;
