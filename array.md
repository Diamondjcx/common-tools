sort

```
如果 compareFn(a, b) 大于 0，b 会被排列到 a 之前。
如果 compareFn(a, b) 小于 0，那么 a 会被排列到 b 之前；
```

splice

```
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

```

1. 一维数组排序

```js
/**
 * 一维数组 根据key 进行排序
 */
export const handleSort = (data, key) => {
  data.sort(function (a, b) {
    return b[key] - a[key];
  });
};

const arr = [
  {
    name: "name1",
    status: 0,
  },
  {
    name: "name2",
    status: 1,
  },
  {
    name: "name3",
    status: 1,
  },
  {
    name: "name4",
    status: 0,
  },
];
```

2. 一维数组某一项置顶操作

```js
export const top = (data, uid) => {
  data?.sort((item) => (item.uid === uid ? -1 : 0));
};

export const top1 = (data, uid) => {
  let i = data?.findIndex((el) => el.uid === uid);
  if (i > -1) {
    data.unshift(...data.splice(i, 1));
  }
};

const arr = [
  {
    iconName: "icon-paiduirenshu",
    uid: "imo_people_counting",
    name: "客流统计",
  },
  {
    iconName: "icon-zongshiyongcishu",
    uid: "imo_table_status_recognition",
    name: "餐桌状态识别",
  },
  {
    iconName: "icon-wanshouji",
    uid: "imo_play_phone_snapshot",
    name: "伙伴工作区玩手机识别",
  },
  {
    iconName: "icon-a-epslochushimaochushipengren",
    uid: "imo_no_one_on_duty",
    name: "厨房空岗识别",
  },
];

const uid = "imo_play_phone_snapshot";

// 将伙伴玩手机识别置顶
top(arr, uid);
```

3. 两个数组对象求差值

```js
/**
 * 两个数组对象求差值
 * 全量数据、一部分数据 求另一部分数据
 */
export let uniqueFunc = (arr1, arr2) => {
  const arr3 = arr2.filter(
    (x) =>
      arr1.findIndex((y) => {
        return x.uid == y.uid;
      }) < 0
  );
  return arr3;
};

const all = [
  {
    iconName: "icon-paiduirenshu",
    uid: "imo_people_counting",
    name: "客流统计",
  },
  {
    iconName: "icon-zongshiyongcishu",
    uid: "imo_table_status_recognition",
    name: "餐桌状态识别",
  },
  {
    iconName: "icon-wanshouji",
    uid: "imo_play_phone_snapshot",
    name: "伙伴工作区玩手机识别",
  },
  {
    iconName: "icon-a-epslochushimaochushipengren",
    uid: "imo_no_one_on_duty",
    name: "厨房空岗识别",
  },
  {
    iconName: "icon-xiuxishi",
    uid: "imo_retention_detection",
    name: "休息室滞留识别",
  },
];

const part1 = [
  {
    iconName: "icon-wanshouji",
    uid: "imo_play_phone_snapshot",
    name: "伙伴工作区玩手机识别",
  },
  {
    iconName: "icon-a-epslochushimaochushipengren",
    uid: "imo_no_one_on_duty",
    name: "厨房空岗识别",
  },
];

// 求part2 ??
```

4. 调换数组顺序
   场景：预览查看大图 从点开的那张开始预览

```js
// [1, 2, 3, 4, 5] ----> [3, 4, 5, 1, 2]
/**
 *
 */
export const switchOrder = () => {
  const arr = [1, 2, 3, 4, 5];
  const res = arr.slice(2).concat(arr.slice(0, 2)); // [3, 4, 5, 1, 2]
  return res;
};
```
