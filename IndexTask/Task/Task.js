//1) QUẢN LÝ DANH SÁCH NGƯỜI DÙNG 

// – Mỗi người dùng là một object; Danh sách là một array
const users = [
  { name: "khai", age: 24, email: "khai@gmail.com", phone: "0123456" },
  { name: "viet", age: 24, email: "viet@gmail.com", phone: "012345336" },
  { name: "son",  age: 24, email: "son@gmail.com",  phone: "0123456" }
];

// – Thêm, xóa, tìm kiếm theo tên/email
function addUser(list, user) { list.push(user); }

function removeUserByEmail(list, email) {
  const i = list.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
  if (i !== -1) list.splice(i, 1);
}

function findUsersByName(list, keyword) {
  const k = keyword.toLowerCase();
  return list.filter(u => u.name.toLowerCase().includes(k));
}

function findUserByEmail(list, email) {
  const k = email.toLowerCase();
  return list.find(u => u.email.toLowerCase() === k) || null;
}

// – Format tên người dùng khi hiển thị (viết hoa chữ cái đầu)
function capitalize(str) {
  return String(str)
    .split(/\s+/)
    .map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "")
    .join(" ");
}
// (hiển thị)
function displayUsers(list) {
  return list.map(u => ({ ...u, name: capitalize(u.name) }));
}

// 2) PHÂN TÍCH MỘT ĐOẠN VĂN 
// – Tách từ, đếm số lần xuất hiện mỗi từ → trả về object {từ: số lần}
function wordCount(text) {
  const words = String(text).toLowerCase().match(/[\p{L}\p{N}']+/gu) || [];
  const res = {};
  for (const w of words) res[w] = (res[w] || 0) + 1;
  return res;
}


// 3) XỬ LÝ DỮ LIỆU ĐƠN HÀNG 
// – Mỗi đơn hàng: {id, product, qty, price}
const orders = [
  { id: 1, product: "Áo",   qty: 2, price: 120000 },
  { id: 2, product: "Quần", qty: 1, price: 250000 },
  { id: 3, product: "Áo",   qty: 3, price: 110000 },
  { id: 4, product: "Mũ",   qty: 5, price: 50000  }
];

// – Tính tổng tiền, lọc đơn hàng theo sản phẩm, sắp xếp theo giá
function totalAmount(list) {
  return list.reduce((sum, o) => sum + o.qty * o.price, 0);
}

function filterByProduct(list, name) {
  const k = name.toLowerCase();
  return list.filter(o => o.product.toLowerCase().includes(k));
}

function sortByPrice(list, order = "asc") {
  return [...list].sort((a, b) => order === "desc" ? b.price - a.price : a.price - b.price);
}



console.log("1) USERS:");
displayUsers(users).forEach(u =>
  console.log(`${u.name} | age:${u.age} | email:${u.email} | phone:${u.phone}`)
);

// Thêm / tìm / xoá
addUser(users, { name:"lan anh", age:23, email:"lananh@gmail.com", phone:"0909" });
console.log("\nSau khi thêm:");
displayUsers(users).forEach(u => console.log(u.name));

console.log("\nTìm theo tên 'vi':", findUsersByName(users, "vi").map(u => u.name));
console.log("Tìm theo email 'SON@GMAIL.COM':", findUserByEmail(users, "SON@GMAIL.COM"));
removeUserByEmail(users, "viet@gmail.com");
console.log("Sau khi xoá 'viet@gmail.com':", displayUsers(users).map(u => u.name));

// 2) Đếm từ 
console.log("\n2) Đếm từ :");
const counts = wordCount("Sơn đi học, sơn gặp Việt. Việt hỏi Sơn: học chưa?");
Object.entries(counts)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "vi"))
  .forEach(([w, c]) => console.log(`${w}: ${c}`));

// 3) Đơn hàng
console.log("\n3) Đơn hàng:");
console.log("Tổng:", totalAmount(orders));

// Lọc 'áo' và in từng dòng
const ao = filterByProduct(orders, "áo");
ao.forEach(o => console.log(`#${o.id} ${o.product} x${o.qty} = ${o.qty * o.price} VND`));

// Giá tăng
console.log("\nGiá tăng:");
sortByPrice(orders, "asc").forEach(o => console.log(`#${o.id} ${o.product} - ${o.price} VND`));

// Giá giảm
console.log("\nGiá giảm:");
sortByPrice(orders, "desc").forEach(o => console.log(`#${o.id} ${o.product} - ${o.price} VND`));