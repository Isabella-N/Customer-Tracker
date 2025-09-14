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

//Adds a new customer
customers.push({name: "Han Jisung", 
    email: "HanStrayKidz@gmail.com",
    purchases: [{pens: 60, notebooks: 5}]
});

//Gets rid of first customer
my_shift = customers.shift()

//changes the email for Nicoles
customers[0].email = "NicTurner@gmail.com"

//Get rid of the old purchase number
my_shift = customers[2].purchases.shift()

//Updated purchase number
customers[2].purchases.push({pens: 60, notebooks: 5, backpacks: 2});

customers.forEach(customer => {
    console.log(`Name: ${customer.name}`, 
        `| Email: ${customer.email}`);

    customer.purchases.forEach(purchase => {
        console.log(
            `   Purchases: ${purchase.pens} Pens, ${purchase.notebooks} Notebooks, and ${purchase.backpacks} Backpacks`)}
        );
});
