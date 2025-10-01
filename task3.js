// task3.js — module quản lý người dùng (KHÔNG dùng export/import)

// ===== Seed dữ liệu ban đầu =====
const person = [
  { name: "Tran Anh Khai", age: 24, email: "khaitrankute2411@gmail.com" }
];

// ===== STATE & HELPERS =====
let users = [];
let nextId = 1;

const normEmail = (e = "") =>
  String(e).trim().toLowerCase().replace(/\s+/g, "");
const cap = (s = "") =>
  s.trim()
   .split(/\s+/)
   .map(w => (w[0]?.toUpperCase() ?? "") + (w.slice(1) ?? "").toLowerCase())
   .join(" ");

// Seed person -> users (gắn id nếu thiếu)
users = person.map((u, i) => ({
  id: u.id ?? i + 1,
  name: cap(u.name),
  age: u.age,
  email: normEmail(u.email),
}));
nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

// ===== CÁC HÀM THEO ĐỀ =====
const addUser = ({ name, age, email }) => {
  if (!name || !Number.isFinite(age) || !email)
    throw new Error("Thiếu name/age/email");
  const emailKey = normEmail(email);
  if (users.find(u => normEmail(u.email) === emailKey))
    throw new Error("Email đã tồn tại");

  const user = { id: nextId++, name: cap(name), age, email: emailKey };
  users = [...users, user]; // spread
  return user;
};

const getUserByEmail = (email) =>
  users.find(u => normEmail(u.email) === normEmail(email)) ?? null;

const deleteUser = (id) => {
  const before = users.length;
  users = users.filter(u => u.id !== id); // filter
  return users.length < before;           // true nếu xoá được
};

const listUsers = (mode = "map") => {
  if (mode === "forof") {
    const out = [];
    for (const { id, name, age, email } of users) out.push({ id, name, age, email });
    return out;
  }
  return users.map(u => ({ ...u })); // map
};

// ===== Mô phỏng lưu server =====
const saveToServerCallback = (user, cb) => {
  setTimeout(() => {
    if (!user?.email) cb(new Error("Server: thiếu email"));
    else cb(null, { ok: true, savedAt: Date.now(), data: { ...user } });
  }, 500);
};

const saveToServerPromise = (user) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user?.email) reject(new Error("Server: thiếu email"));
      else resolve({ ok: true, savedAt: Date.now(), data: { ...user } });
    }, 500);
  });

const saveToServer = async (user) => {
  const res = await saveToServerPromise(user);
  return res;
};

// ===== Expose ra GLOBAL để index1.html gọi được =====
window.person = person;
window.addUser = addUser;
window.getUserByEmail = getUserByEmail;
window.deleteUser = deleteUser;
window.listUsers = listUsers;
window.saveToServerCallback = saveToServerCallback;
window.saveToServerPromise = saveToServerPromise;
window.saveToServer = saveToServer;
