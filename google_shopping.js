var data = require("./products.json")

// Solution for No. 1

var count = 0

for (var i = 0; i < data.items.length; i++) {
	if (data.items[i].kind === "shopping#product") {
		count ++;
		// console.log("Yes")
	}
	// console.log(data.items[i])
}

console.log(count);


// Solution for No. 2

for (var i = 0; i <data.items.length; i++) {
	if (data.items[i].product.inventories[0].availability === "backorder") {
		console.log(data.items[i].product.author.name);
		// console.log("Yes")
	}
}



// Solution for No. 3

for (var i = 0; i <data.items.length; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i].product.author.name);
	}
}



// Solution for No. 4

for (var i = 0; i <data.items.length; i++) {
	if (data.items[i].product.brand === "Canon") {
		console.log(data.items[i].product.author.name);
	}
}



// Solution for No. 5

for (var i = 0; i <data.items.length; i++) {
	if (data.items[i].product.brand === "Canon" && data.items[i].product.author.name.indexOf("eBay") != -1) {
		console.log(data.items[i].product.author.name);
	}
}



// Solution for No. 6

for (var i = 0; i <data.items.length; i++) {
	console.log(data.items[i].product.brand);
	console.log(data.items[i].product.inventories[0].price);
	console.log(data.items[i].product.images[0].link);
	console.log("----");
}


