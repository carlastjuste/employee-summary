const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


console.log("---------------EMPLOYEE SUMMARY APP---------------");
console.log("Please answer the following questions to build your team."); 


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const builtTeam = async (employees = []) => {
  const prompts = [
    {
        type:'input',
        name:'name',
        message:'What\'s the team member\'s name?'
       
    },
    {
        type: 'input',
        name:'id',
        message: 'What\'s the team member\'s id?'
    },
    {
        type: 'input',
        name:'email',
        message: 'What\'s the team member\'s email address?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What\'s the team member\'s role?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
  ];

  const managerPrompt = [   
    {
        type: 'input',
        name:'officeNumber',
        message: 'What\'s the manager\'s office number?'
    }
];

  const engineerPrompt = [   
        {
            type: 'input',
            name:'github',
            message: 'What\'s the engineer\'s GitHub username?'
        }
];

   const internPrompt = [   
    {
        type: 'input',
        name:'school',
        message: 'What\'s the intern\'s school?'
    }
];

    const repeat = [
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Enter another team member? ',
                default: true
              }
    ];

  const employee = await inquirer.prompt(prompts);
  const role = employee.role;

  switch (role) {
      case 'Manager':
        const {officeNumber} = await inquirer.prompt(managerPrompt);
        employee.officeNumber = officeNumber;
        employees.push(employee);
        break;

      case 'Engineer':
        const {github} = await inquirer.prompt(engineerPrompt);
        employee.github = github;
        employees.push(employee);
        break;

      case 'Intern':
        const {school} = await inquirer.prompt(internPrompt);
        employee.school = school;
        employees.push(employee);
        break;

      default:
        break;
  };

  const {addMember} = await inquirer.prompt(repeat);
  return addMember ? builtTeam(employees) : employees;

};

const launch = async () => {
    const employees = await builtTeam();
    console.log(employees);
    const renderHTML = render(employees);
    fs.writeFileSync(outputPath, renderHTML, function(err) {if (err) return console.log(err);});

};
  
  launch();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
