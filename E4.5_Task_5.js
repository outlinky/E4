console.log('Task_5');
console.log('');
// Переписать консольное приложение из предыдущего юнита на классы.

let allPower = 0;
const getAllPower = function () {
    console.log(`Now consumed - ${allPower} kW.\n`);
}


class ParentDevice {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.connection = false
    }
    plugIn() {
        if (this.connection) {
            console.log(`ERROR: "${this.name.toUpperCase()}" has been already plugged in!\n`);
        }else {
            console.log(`Device "${this.name.toUpperCase()}" is ON!`);
            allPower += this.power;
            getAllPower();
            return this.connection = true
        }
    }
    unplug() {
        if (this.connection) {
            console.log(`Device "${this.name.toUpperCase()}" is OFF!`);
            allPower -= this.power;
            getAllPower();
            return this.connection = false
        }else {
            console.log(`ERROR: "${this.name.toUpperCase()}" has been  already turned off!\n`);
        }
    }
}
const lamp = new ParentDevice('lamp', 2.5);
console.log(`******************** lamp test ********************`);
lamp.plugIn();
lamp.unplug();
console.log(`******************** lamp test ********************\n`);


class ChildDigitalDevice extends ParentDevice {
    constructor(name, power, type) {
        super(name, power);
        this.type = type
    }
    plugIn() {
        return super.plugIn();
    }
    unplug() {
        return super.unplug();
    }
    getInfo(){

        console.log(`Your device "${this.name.toUpperCase()}" is a digital device \nthat consumes ${this.power} kW and is of type - "${this.type}"\n`);
    }
}
const computer = new ChildDigitalDevice('computer', 65, 'laptop');
console.log(`******************** computer test ********************`);
computer.plugIn();
computer.getInfo();
computer.unplug();
console.log(`******************** computer test ********************\n`);


class ChildOfficeDevice extends ParentDevice {
    constructor(name, power, workPower) {
        super(name, power);
        this.workPower = workPower
        this.work = false
    }
    plugIn() {
        return super.plugIn();
    }
    unplug() {
        if (this.work) {
            this.stopWork();
            return super.unplug();
        }else {
            return super.unplug();
        }

    }
    startWork() {
        if (this.connection) {
            if (!this.work) {
                allPower += this.workPower;
                console.log(`${this.name.toUpperCase()} started to work.`);
                getAllPower();
                return this.work = true
            }else {
                console.log(`ERROR: The "${this.name.toUpperCase()}" is already working!`);
            }
        }else {
            console.log(`ERROR "${this.name.toUpperCase()}" not plugged in.\nNeed plug in!`);
        }
    }
    stopWork() {
        if (this.connection) {
            if (this.work) {
                allPower -= this.workPower;
                console.log(`${this.name.toUpperCase()} has stopped working.`);
                getAllPower();
                return this.work = false
            }else {
                console.log(`ERROR The ${this.name.toUpperCase()} is already stopped!`);
            }
        }else {
            console.log(`ERROR "${this.name.toUpperCase()}" not plugged in.\nNeed plug in!`);
        }
    }
}
const printer = new ChildOfficeDevice('printer', 12.5, 1.5);
console.log(`******************** printer test ********************`);
printer.plugIn();
printer.startWork();
printer.stopWork();
printer.unplug();
console.log(`******************** printer test ********************\n`);

console.log(`******************** all test ********************`);
lamp.plugIn();
computer.getInfo();
computer.plugIn();
printer.plugIn();
printer.startWork();

lamp.unplug();
computer.unplug();
printer.unplug();
console.log(`******************** all test ********************\n`);
