// 1. copy array/obj
// 2. penggabungan array/obj

// menggunakan simbol 3 dot diikuti dengan nama array (...namaArray)

const lebaranFoods = ["lontong", "opor", "sambal goreng"];
const padangFoods = ["rendang", "ayam pop"];

const myLebaranFoods = [...lebaranFoods, "kerupuk udang"];
const myFavoriteFoods = [...lebaranFoods, ...padangFoods];
const myFavoriteFoods2 = [...padangFoods, ...lebaranFoods];

// console.log(lebaranFoods);
// console.log(myLebaranFoods);
// console.log(myFavoriteFoods);
// console.log(myFavoriteFoods2);

// didalam object selain untuk copy obj, bisa digunakan untuk replace juga
const pegawai = {
  nama: "Anto",
  umur: 30,
  lajang: true,
  address: { rt: 12, rw: 1 },
};

const newPegawai = {
  ...pegawai,
  lajang: false,
};

const newPegawaiInformation = {
  umur: 31,
  lajang: false,
  address: { rt: 12, rw: 3 },
};

const detailedPegawai = {
  ...pegawai,
  ...newPegawaiInformation,
};

// console.log(pegawai);
// console.log(newPegawai);
console.log(detailedPegawai);
