console.log('Task_1')
/*
Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
 */

const pet = {
    legs: 4,
    tail: true,
};
const cat = Object.create(pet);
cat.pet = true;
cat.say = "Meow-meow"

getKeysAndValues = function (obj){
    console.log('Keys: ');
    for (let key in obj){
        console.log(key);
    }
    console.log('')
    console.log('Own values: ')
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(obj[key]);
        }
    }
}
getKeysAndValues(cat);
console.log('')

