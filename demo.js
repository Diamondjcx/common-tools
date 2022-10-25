function isObjectEmpty(obj) {
  if (
    Object.keys(obj).filter((v) => obj[v] !== "" && obj[v] !== undefined)
      .length <= 0
  ) {
    return true;
  }
  return false;
}

const obj = {
  name: "",
  age: false,
  status: "",
};

const r = isObjectEmpty(obj);
console.log("r", r);
