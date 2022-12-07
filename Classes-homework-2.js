class Governor {
    static state() {
        return 'New York';
    }
    static party() {
        return 'Democratic';
    }
    static cause() {
        return `Women's rights`;
    }
}
Governor.state()
Governor.party()
Governor.cause()


class Person {
    constructor(name, age, hair) {
        this.name = name;
        this.age = age;
        this.hair = hair;
    }
    firstName() {
        return this.name;
    }
    years() {
        return this.age;
    }
    hairPattern() {
        return this.hair;
    }
}

class PostalWorker extends Person {
    constructor(name, age, hair, uniform,) {
        super(name, age, hair)
        this.uniform = uniform;
    }
    outfit() {
        return this.uniform;
    }
}

class Chef extends Person {
    constructor(name, age, hair, tools) {
        super(name, age, hair)
        this.tools = tools;
    }
    utensils() {
        return this.tools;
    }
}

let PostalWorker1 = new PostalWorker('Doug', 25, 'curly', 'short cargos');
let PostalWorker2 = new PostalWorker('Deek', 30, 'straight', 'long cargos');
let Chef1 = new Chef('Martha', 35, 'wavy', 'butcher knives');
let Chef2 = new Chef('Bobby', 40, 'bald', 'serated knives');

console.log(PostalWorker1);
console.log(PostalWorker2);
console.log(Chef1);
console.log(Chef2);