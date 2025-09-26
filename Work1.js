var a = 10;
console.log(a);
let b = 11;
console.log(b);
const c = 12;
console.log(c);


//dùng chuỗi
let str = "Hello kitty";
console.log(str.length);

// viet hoa viet thuong
console.log(str.toUpperCase());  
console.log(str.toLowerCase());  

// chuỗi
console.log(str.substring(0, 5));   
console.log(str.replace("kitty", "java"));

// bóc tách
let tach = str.split(",");
console.log(tach);
//tach chuoi
console.log(str.trim());    

// làm việc với đối tượng
const person = {
        name: "Bé",
        age: 23,
        job: "Devlopment",
        greet: function(){
            return "Xin chao minh la " + this.name;  

        }

};
//truy cap thuoc tinh
  console.log(person.name); // be
  console.log(person.age); // 23
  //goi method
  console.log(person.greet()); // xin chao toi la be

  //them thuoc tinh moi
  person.email = "khaitrankute2411@gmail.com";
  // xoa thuoc tinh
  delete person.job;
  //lay danh sach keys & values
  console.log(Object.keys(person));
  console.log(Object.values(person));
  

//   ====== Mảng =========
let Array = [1, 2, 3, 4, 5];
Array.push(6); // thêm 6 vào cuối 
Array.pop(); //xoa cuối
Array.unshift(0); // thêm đầu
Array.shift();    // xóa đầu

// duyệt mảng
Array.forEach(num => console.log(num));

// map: tạo mảng mới
let squared = Array.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// filter: lọc
let even = Array.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce: tính tổng
let sum = Array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
console.log(Array);

// cách 1: khai báo truyền thống
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Bé"));

// cách 2: function expression
const add = function(x, y) {
  return x + y;
};
console.log(add(3, 4)); // 7

// cách 3: arrow function
const multiply = (x, y) => x * y;
console.log(multiply(2, 5)); // 10

// function trong object
const calculator = {
  square: x => x * x,
  cube: x => x * x * x
};
console.log(calculator.square(3)); // 9
console.log(calculator.cube(2));   // 8


let helo = [1, 2, 3];
helo.forEach(num => console.log(num));

const arri = [1, 2, 3];
let arro = [];
for(let i = 0; i < arri.length; i++){
  arro.push( arri[i] * arri[i] );

};
console.log(arro);  

//====== Work 2======
//   1. Viết chương trình quản lý danh sách người dùng:

// - Mỗi người dùng là một object
// - Danh sách là một array
const ListPerson = [
  {
  name: "Khai",  
  email: "khaita@gmail.com",
  age: 25,
  phone: "0123456789"  
},
   {
  name: "Viet",  
  email: "vietph@gmail.com",
  age: 25,
  phone: "0123456788"  
},
 {
  name: "Son",  
  email: "sonpp@gmail.com",
  age: 25,
  phone: "0123456786"   
}
]
  ListPerson.forEach(u => console.log(u)); 

// - Có chức năng thêm, xóa, tìm kiếm theo tên/email
function addUser(list, user) {
  if (!user?.email) throw new Error("Thiếu email.");
  const dup = list.some(u => u.email.toLowerCase() === user.email.toLowerCase());
  if (dup) throw new Error("Email đã tồn tại.");
  list.push({ ...user, name: capitalize(user.name ?? "") }); // chuẩn hoá tên khi thêm
  return list[list.length - 1];
}
function removeUserByEmail(list, email) {
  const i = list.findIndex(u => u.email.toLowerCase() === String(email).toLowerCase());
  if (i === -1) return false;
  list.splice(i, 1);
  return true;
}
function searchUsers(list, keyword) {
  const k = String(keyword).trim().toLowerCase();
  if (!k) return [];
  return list.filter(u =>
    u.name.toLowerCase().includes(k) || u.email.toLowerCase().includes(k)
  );
}
// - Format tên người dùng khi hiển thị (viết hoa chữ cái đầu)


// 2. Viết hàm phân tích một đoạn văn:

// - Tách từ, đếm số lần xuất hiện mỗi từ

// - Trả về object `{từ: số lần}`


// 3. Viết hàm xử lý dữ liệu đơn hàng:

// - Mỗi đơn hàng là object (id, sản phẩm, số lượng, giá)

// - Tính tổng tiền, lọc đơn hàng theo sản phẩm, sắp xếp theo giá