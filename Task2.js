// ================== DỮ LIỆU MẪU ==================
const cart = [
  { id: 1, name: "Áo thun",      price: 150000, quantity: 2 },
  { id: 2, name: "Quần jeans",   price: 300000, quantity: 1 },
  { id: 3, name: "Giày sneaker", price: 500000, quantity: 1 },
];

// ================== HÀM PHỤ TRỢ ==================
function formatK(vnd) {
  return Math.round(vnd / 1000) + "k";
}

// ================== YÊU CẦU BÀI TOÁN ==================
// 1) Tính tổng tiền giỏ hàng
function totalAmount(list) {
  return list.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

// 2) Thêm sản phẩm (nếu trùng id thì tăng số lượng)
function addItem(list, item) {
  // item: { id, name, price, quantity }
  if (!item || item.id == null) return list;

  const exist = list.find(p => p.id === item.id);
  if (exist) {
    // CHỈ tăng số lượng, KHÔNG đổi giá/ten khi trùng id
    const addQty = Number(item.quantity) || 1;
    exist.quantity += addQty;
  } else {
    list.push({
      id: item.id,
      name: item.name ?? "Sản phẩm",
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
    });
  }
  return list;
}

// 3) Xóa sản phẩm theo id
function removeItemById(list, id) {
  const idx = list.findIndex(p => p.id === id);
  if (idx >= 0) list.splice(idx, 1);
  return list;
}

// 4) Hiển thị giỏ hàng dưới dạng chuỗi
//    "2 x Áo thun - 150k | 1 x Quần jeans - 300k | ..."
function displayCart(list) {
  if (!list.length) return "(Giỏ hàng trống)";
  return list
    .map(p => `${p.quantity} x ${p.name} - ${formatK(p.price)}`)
    .join(" | ");
}

// Hiển thị
console.log("Giỏ ban đầu:", JSON.parse(JSON.stringify(cart)));
console.log("Hiển thị:", displayCart(cart));
console.log("Tổng tiền:", totalAmount(cart).toLocaleString("vi-VN"), "VND");

console.log("\n--- Thêm item id=2 (trùng id => tăng số lượng) ---");
addItem(cart, { id: 2, name: "Quần jeans", price: 999999, quantity: 2 });
// giá sẽ KHÔNG đổi vì trùng id: chỉ cộng quantity
console.log("Hiển thị:", displayCart(cart));
console.log("Tổng tiền:", totalAmount(cart).toLocaleString("vi-VN"), "VND");

console.log("\n--- Thêm item id=4 (mới) ---");
addItem(cart, { id: 4, name: "Mũ lưỡi trai", price: 80000, quantity: 3 });
console.log("Hiển thị:", displayCart(cart));
console.log("Tổng tiền:", totalAmount(cart).toLocaleString("vi-VN"), "VND");

console.log("\n--- Xóa item id=1 ---");
removeItemById(cart, 1);
console.log("Hiển thị:", displayCart(cart));
console.log("Tổng tiền:", totalAmount(cart).toLocaleString("vi-VN"), "VND");

// Expose để bạn test tay trên Console nếu muốn
window.cart = cart;
window.totalAmount = totalAmount;
window.addItem = addItem;
window.removeItemById = removeItemById;
window.displayCart = displayCart;
