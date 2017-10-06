function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}
var samsungGalaxyS6 = new Phone('Samsung', 2100, 'grey'),
	iPhone6S = new Phone('Apple', 2850, 'black'),
	onePlusOne = new Phone('One Plus', 2200, 'silver');
samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();