class Dog {
	constructor (name) {
		this.name = name;
	}
}
class Cat {
	constructor (name) {
		this.name = name;
	}
}


class Pet {
	create (type, name) {
		let pet = {};
		switch (type) {
			case 'dog':
				pet = new Dog(name);
			case 'cat':
				pet = new Cat(name);
		}
		pet.type = type;
		pet.desc = function () {
			console.log(`it is ${this.type}, it name is ${this.name}`);
		}
		return pet;
	}
}

const pets = new Pet();

const Moody = pets.create('dog', 'Moody');
Moody.desc();