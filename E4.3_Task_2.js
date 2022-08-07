console.log('Task_2')
/*
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
 */
checkKey = function (key, obj){
    if (key in obj){
        console.log('True');
        return true
    }else{
        console.log('False');
        return false
    };
};
checkKey('pet', cat);
console.log('')