// Pens, Notebooks, Backpacks
let customers = [
    {name: "Kenzie Ricer", 
    email: "kenzieR22@gmail.com",
    purchases: [{pens: 10, notebooks: 4, backpacks: 1}] 
}, {
    name: "Nicole Turner",
    email: "NTurner33@gmail.com",
    purchases: [{pens: 20, notebooks: 6, backpacks: 2}]
}, {
    name: "Sabrina Carpenter", 
    email: "SabrinaCar@gmail.com",
    purchases: [{pens: 40, notebooks: 20, backpacks: 10}]
}]

//Adds a new customer (good)
customers.push({name: "Han Jisung", 
    email: "HanStrayKidz@gmail.com",
    purchases: [{pens: 60, notebooks: 5, backpacks: 1}]
});

//Gets rid of first customer (good)
my_shift = customers.shift()

//changes the email for Nicoles (good)
customers[0].email = "NicTurner@gmail.com"

//change a purchase number
//customers.push(customer[0][2][1] = 6)

customers.forEach(obj => console.log(
    `Name: ${obj.name}`,
    `| Email: ${obj.email}`,
));

purchases.forEach(obj => console.log(
    `Pens: ${obj.pens}`,
    `| Notebooks: ${obj.notebooks}`,
    `| Backpacks: ${backpacks}`
));