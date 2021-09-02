var inquirer = require('inquirer');

console.log("Please  register");
console.log("Welcome to kool pizzas");
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "Enter your username",
            name: "username"
        },
        {
            type: "password",
            message: "Enter your Password",
            name: "password"
        }
    ])
    .then((userdetails) => {

        // Use user feedback for... whatever!!
        console.log("Welcome back", userdetails.username);

        inquirer.prompt([
            {
                type: "confirm",
                name: "forDelivery",
                message: "Do you want the pizza to be delivered?"
            }
        ])
            .then(ans => {
                if (ans.forDelivery) {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "address",
                            message: "Enter your address"
                        },
                        {
                            type: "input",
                            name: "phone",
                            message: "What is your phone number?",
                            validate(value) {
                                const pass = value.length === 10;
                                if (pass) {
                                    return true;
                                }
                                return "Please enter a vaild phone number!"
                            }
                        },
                        {
                            type: "input",
                            name: "qty",
                            message: "How many pizzas do you need?",
                            validate(value) {
                                const valid = !isNaN(parseInt(value));
                                return valid || "Please enter a number"
                            },
                            filter(value) {
                                return parseInt(value);
                            }
                        },
                        {
                            type: "list",
                            name: "Toppings",
                            message: "Please select your toppings",
                            choices: [
                                "Paneer",
                                "Chicken",
                                "Corn and Cheese"
                            ]
                        },
                        {
                            type: "list",
                            name: "size",
                            message: "Please select your size",
                            choices: [
                                "R",
                                "L",
                                "S"
                            ]
                        }
                    ])
                    .then(ans => {
                        let price;
                        if (ans.size === "S") {
                                price = 100;
                        } else if (ans.size === "L") {
                                price = 300;
                        } else {
                                price = 200;
                        }

                        console.log("your order:" + " " + ans.Toppings + " " + ans.size + "  Your Bill " + (price * Number(ans.qty)) + " Gst: " + (price * Number(ans.qty) * 0.18));
                    })
                } else {
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "phone",
                            message: "What is your phone number?",
                            validate(value) {
                                const pass = value.length === 10;
                                if (pass) {
                                    return true;
                                }
                                return "Please enter a vaild phone number!"
                            }
                        },
                        {
                            type: "input",
                            name: "qty",
                            message: "How many pizzas do you need?",
                            validate(value) {
                                const valid = !isNaN(parseInt(value));
                                return valid || "Please enter a number"
                            },
                            filter(value) {
                                return parseInt(value);
                            }
                        },
                        {
                            type: "list",
                            name: "Toppings",
                            message: "Please select your toppings",
                            choices: [
                                "Paneer",
                                "Chicken",
                                "Corn and Cheese"
                            ]
                        },
                        {
                            type: "list",
                            name: "size",
                            message: "Please select your size",
                            choices: [
                                "R",
                                "L",
                                "S"
                            ]
                        }
                    ])
                    .then(ans => {
                        let price;
                        if (ans.size === "S") {
                                price = 100;
                        } else if (ans.size === "L") {
                                price = 300;
                        } else {
                                price = 200;
                        }

                        console.log("your order:" + " " + ans.Toppings + " " + ans.size + "  Your Bill " + (price * Number(ans.qty)) + " Gst: " + (price * Number(ans.qty) * 0.18));
                    })
                }
            })



    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });