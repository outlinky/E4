console.log('Task_3')
/*
Написать функцию, которая создает пустой объект, но без прототипа.
 */
const emptyObj = function (){
    const emptyObject = Object.create(null)
    return emptyObject
}
console.log(emptyObj())