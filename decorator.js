class Coffe {
	cost () {
		return 5;
	}
}
const sugar = coffe => {
	const cost = coffe.cost();
	coffe.cost = () => cost + 1;
}
const milk = coffe => {
	const cost = coffe.cost();
	coffe.cost = () => cost + 1;
}
const large = coffe => {
	const cost = coffe.cost();
	coffe.cost = () => cost + 2;
}

const lgCoffeWithMilkAndSuga = coffe => {
	sugar(coffe);
	milk(coffe);
	large(coffe);
}
const coffe = new Coffe();


console.log(coffe.cost());
lgCoffeWithMilkAndSuga(coffe);
console.log(coffe.cost());