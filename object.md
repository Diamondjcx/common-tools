1. 判断对象属性是否全部为空

```js
export function isObjectEmpty(obj) {
  if (
    Object.keys(obj).filter((v) => obj[v] !== "" && obj[v] !== undefined)
      .length <= 0
  ) {
    return true;
  }
  return false;
}

// true
const obj = {
  name: "",
  age: undefined,
  status: "",
};

// true
const obj = {
  name: "",
  age: "",
  status: "",
};

// false
const obj = {
  name: "",
  age: false,
  status: "",
};
```

2. 过滤查询参数中为空的属性

```js
/**
 * 过滤参数中为空的属性
 * 查询及增加、修改 接口时可用
 */
export const objectFilter = (obj) => {
  let data = {};
  Object.keys(obj).forEach((item) => {
    if (obj[item] !== "" && obj[item] !== undefined) {
      if (item === "dr") {
        data[item] = `${dayjs(obj[item][0]).format("YYYY.MM.DD")}-${dayjs(
          obj[item][1]
        ).format("YYYY.MM.DD")}`;
      } else {
        data[item] = obj[item];
      }
    }
  });
  return data;
};

const obj = {
  dr: [],
  status: 1,
  uid: "",
};
```
