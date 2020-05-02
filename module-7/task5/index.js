const information = {
    name: "Anastasiia",
    age: 16,
    sex: "female",
    married: false,
};
let str = "";
for (const key in information) {
    console.log(`Key:${key}`);
    console.log(`Value:${information[key]}`);
    str += information[key];
};
console.log(str);