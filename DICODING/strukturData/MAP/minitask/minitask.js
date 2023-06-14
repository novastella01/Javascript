const priceInJPY = 5000;

const myMap = nem Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
]);

const hasil = priceInJPY * myMap.get("jpy");
console.log(hasil);