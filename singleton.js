
/* V-1 Object */
const universe = {
	name: 'Big',
	id: 1
};

const universe_1 = universe;
const universe_2 = universe;
console.log(universe_1 === universe_2);



/* V-2 */
function Counter () {
	const instance = this;
	this.count = 1;
	this.inc = () => {
		this.count++;
		console.log(this.count);
	};
	Counter = function () {
		return instance;
	}
}
Counter.prototype.getCount = function () {
	console.log(this.count);
}

const counter_1 = new Counter();
const counter_2 = new Counter();

Counter.prototype.reset = function () {
	this.count = 0;
	console.log(this.count);
}
counter_1.inc();
counter_2.inc();
counter_2.inc();
counter_2.inc();
counter_2.inc();
counter_1.inc();

counter_1.getCount();
counter_2.getCount();
/* counter_2.reset(); error */



/* V-3 by Stoyan Stefanov */
function Universe () {
	let instance;

	Universe = function Universe() {
		return instance;
	};

	/* transfer prototype properties */
	Universe.prototype = this;

	/* create an instance */
	instance = new Universe();

	/* reset pointer to constructor */
	instance.constructor = Universe;

	/* add the rest of the functionality */
	instance.start_time = 0;
	instance.bang = 'Big';
	return instance;
}

const uni_1 = new Universe();

Universe.prototype.everything = 'bla';

const uni_2 = new Universe();

console.log(uni_1 === uni_2);

console.log(uni_1.everything);
console.log(uni_2.everything);