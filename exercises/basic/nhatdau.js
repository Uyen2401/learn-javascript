let bean = [
  {
    name: "Đậu đỏ Nhật",
    category: "Đậu đỏ",
  },
  {
    name: "Đậu đỏ nhỏ",
    category: "Đậu đỏ",
  },
  {
    name: "Đậu trắng lớn",
    category: "Đậu trắng",
  },
  {
    name: "Đậu trắng nhỏ",
    category: "Đậu trắng",
  },
  {
    name: "Đậu xanh không vỏ",
    category: "Đậu xanh",
  },
  {
    name: "Đậu xanh vỏ",
    category: "Đậu xanh",
  },
  {
    name: "Đậu đỏ Đà Lạt",
    category: "Đậu đỏ",
  },
  {
    name: "Đậu trắng Canada",
    category: "Đậu trắng",
  },
  {
    name: "Đậu xanh hạt lớn",
    category: "Đậu xanh",
  },
  {
    name: "Đậu xanh hữu cơ",
    category: "Đậu xanh",
  },
];

let white = [];
let green = [];
let red = [];

// for (let i = 0; i < bean.length; i++) {
//   if (bean[i].category == "Đậu trắng") {
//     white.push(bean[i]);
//   } else if (bean[i].category == "Đậu xanh") {
//     green.push(bean[i]);
//   } else if (bean[i].category == "Đậu đỏ") {
//     red.push(bean[i]);
//   }
// }

for (let i = 0; i < bean.length; i++) {
  switch (bean[i].category) {
    case "Đậu trắng":
      white.push(bean[i]);
      break;
    case "Đậu xanh":
      green.push(bean[i]);
      break;
    case "Đậu đỏ":
      red.push(bean[i]);
      break;
  }
}

console.log("Ro trang:::", white);
console.log("Ro xanh:::", green);
console.log("Ro do:::", red);
