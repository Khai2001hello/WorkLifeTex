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
            return "Xin chao minh la" + this.name;  

        }

};