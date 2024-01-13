var feli = {
    name: 'Felipe Cortez',
    age: 33
}

var juanpa = {
    name: 'Juanpa cortez',
    age: 30
}

const brothers = [feli, juanpa];

class Brothers {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    dameInfo () {
        return `Your name is ${this.name} and your age is ${this.age}`
    }
}

juanpa = new Brothers("Juanpa Cortez", 30);
console.log(juanpa.dameInfo());