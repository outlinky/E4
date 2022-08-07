console.log('Task_4')
/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов.
Включить некоторые в розетку.
Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и,
   желательно, методы, отличные от родительских методов.
4. Создать экземпляры каждого прибора.
5. Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Общие требования:
1. Имена функций, свойств и методов должны быть информативными.
2. Соблюдать best practices:
   2.1 использование camelCase нотации для переменных и методов,
       PascalCase для названия функций-конструкторов и классов;
   2.2 информативные имена (а не a, b);
   2.3 четкая связь между классом и его экземплярами
       (класс описывает множество, а экземпляр конкретную реализацию);
   2.4 использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
 */

let allPower = 0;  // переменная для подсчета потребляемой мощности
// объявление функции получения потребляемой мощности методом - Function Expression (FE).
const getAllPower = function (){
    console.log(`Now consumed - ${allPower} kW.\n`)  // выводим в консоль потребляемую мощность
}


// создание класса "Device" через функцию-конструктор
function Device(name, power){
    this.name = name  // свойство - имя экземпляра
    this.power = power  // свойство - мощность потребляемая устройством
    this.connection = false  // свойство - подключение устройства (по умолчанию - выкл)
}
// создание метода для включения устройства
Device.prototype.turnOn = function (){
    // если уст-во включено
    if (this.connection){
        // выводится сообщение о том, что уст-во уже включено
        console.log(`${this.name.toUpperCase()} has been plugged in!`)
    // иначе
    }else{
        // выводится сообщение об успешном включении
        console.log(`Device "${this.name.toUpperCase()}" is ON!`);
        // увеличивается общая потребляемая мощность
        allPower += this.power;
        getAllPower();
        // и меняется статус устройства (включено)
        return this.connection = true
    }
}
// создание метода для выключения устройства
Device.prototype.turnOff = function (){
    // если уст-во включено
    if (this.connection){
        // выводится сообщение об успешном выключении уст-ва
        console.log(`Device "${this.name.toUpperCase()}" is OFF!`);
        // уменьшается общая потребляемая мощность
        allPower -= this.power;
        getAllPower();
        // и меняется статус устройства (выключено)
        return this.connection = false
    // иначе
    }else {
        // выводится сообщение о том, что устройство уже выключено
        console.log(`${this.name.toUpperCase()} has been TURNED OFF!`)
    }
}


// создание класса "DigitalDevice" через функцию-конструктор
function DigitalDevice (name, power, type){
    this.name = name
    this.power = power
    this.type = type
}
// создание делегирующей связи между классом "DigitalDevice" и "Device"
DigitalDevice.prototype = new Device();


// создание класса "OfficeDevice" через функцию-конструктор
function OfficeDevice (name, power){
    this.name = name
    this.power = power
    this.work = false
}
// создание делегирующей связи между классом "OfficeDevice" и "Device"
OfficeDevice.prototype = new Device();
// создание метода запуска устройства класса "OfficeDevice"
OfficeDevice.prototype.startWork = function (){
    // если устройство включено
    if (this.connection){
        // выводится сообщение об успешном начале работы
        console.log(`${this.name.toUpperCase()} started to work`)
        // увеличивается общая потребляемая мощность
        allPower += 2;
        this.power += 2;
        getAllPower();
        // меняется статус устройства (уст-во работает)
        return this.work = true
    // иначе
    }else{
        // выводим сообщение о том, что необходимо включить устройство
        console.log(`The ${this.name.toUpperCase()} has no power! \nTurn on the ${this.name.toUpperCase()}`);
    }
}
// создание метода остановки устройства класса "OfficeDevice"
OfficeDevice.prototype.stoppedWork = function (){
    // если устройство работает
    if (this.work){
        // выводится сообщение об остановке работы
        console.log(`${this.name.toUpperCase()} stopped working`)
        // уменьшается общая потребляемая мощность
        allPower -= 2;
        getAllPower();
        // меняется статус устройства (устройство не работает)
        return this.work = false
    }
}

// создание экземпляров
const lamp = new Device('lamp', 25);
const computer = new DigitalDevice('computer', 55, 'laptop');
const printer = new OfficeDevice('printer', 10);

// пример работы приложения
console.log('')
printer.turnOn();
printer.startWork();
computer.turnOn();
lamp.turnOn();

console.log('')

computer.turnOff();
lamp.turnOff();
printer.turnOff();





