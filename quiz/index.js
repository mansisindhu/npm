var inquirer = require('inquirer');

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
            name: "password",
            mask: "*"
        }
    ])
    .then((userDetails) => {
        // Use user feedback for... whatever!!
        console.log(`
        Hey ${userDetails.username}
        You have successfully registered for this quiz. 
        There will be 5 multiple choice questions.
        You have to choose correct option.
        On one correct option 1 mark will be rewarded.`);

        inquirer.prompt([
            {
                name:"start",
                type: "confirm",
                message: "Click yes to proceed further!"
            }
        ]).then((confirmation) => {
            if (confirmation.start) {
                console.log("*******************************************************************");
                console.log("Game starts now....");

                setTimeout(function() {
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "one",
                            message: "Finger nails grow faster than hair?",
                            choices: [
                                "True",
                                "False"
                            ]
                        },
                        {
                            type: "list",
                            name: "two",
                            message: "Olympic gold medal is made of silver?",
                            choices: [
                                "True",
                                "False"
                            ]
                        },
                        {
                            type: "list",
                            name: "three",
                            message: "A sneeze is faster than an eye blink?",
                            choices: [
                                "True",
                                "False"
                            ]
                        },
                        {
                            type: "list",
                            name: "four",
                            message: "Right lung is slightly small than left lung?",
                            choices: [
                                "True",
                                "False"
                            ]
                        },
                        {
                            type: "list",
                            name: "five",
                            message: "Glucose is fuel of your body?",
                            choices: [
                                "True",
                                "False"
                            ]
                        }
                    ])
                    .then((answers) => {
                        let score = 0;
    
                        if (answers.one === "True") {
                            score += 1;
                        }
                        if (answers.two === "False") {
                            score += 1;
                        }
                        if (answers.three === "True") {
                            score += 1;
                        }
                        if (answers.four === "True") {
                            score += 1;
                        }
                        if (answers.five === "True") {
                            score += 1;
                        }

                        console.log("------------------------------------------------");
    
                        console.log(`Hey, you have successfully completed the quiz!`);
                        console.log("------------------------------------------------");
                        
                        console.log(`Your final score is ${score}`);
                        console.log("------------------------------------------------");
                        
                    })
                }, 3000);
            } else {
                console.log("Ooopssss! Looks like you are not interested in playing this game!");
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