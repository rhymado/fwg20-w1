// membagi data menjadi bagian bagian
// array => destructuring berdasarkan posisi / index

const rgb = [0, 150, 255];

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// destructuring array menempatkan nama variabel di index elemen
const [red, green, blue] = rgb;
// console.log(red, green, blue);
const hobbies = ["membaca", "memancing", "bermain", "bermusik"];
const [reading, ...sisa] = hobbies;
// console.log(reading);
// console.log(sisa);

// object => destructuring berdasarkan key
const dataPegawaiDepartemenKeuangan = {
  nama: "Anto",
  umur: 30,
  "status pernikahan": true,
};
const { nama: pName, umur, "status pernikahan": sp } = dataPegawaiDepartemenKeuangan;
console.log(pName, umur, sp);
