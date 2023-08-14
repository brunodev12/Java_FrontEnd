const str = '{ "name": "Manz", "life": 99 }';
const obj = JSON.parse(str);
console.log(obj)
obj.name; // 'Manz'
obj.life; // 99

console.log(obj.name)

const obj2 = {
    name: "Manz",
    life: 99,
    saludar: function() {
        return "Hola!";
    },
};
const str2 = JSON.stringify(obj2);
console.log(str2); // '{"name":"Manz","life":99}'
console.log(obj2.saludar())