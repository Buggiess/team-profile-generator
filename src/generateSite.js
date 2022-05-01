const generateTeam = (team) => {
    const frontPage = [];

    const createManager = manager => {
        let managerCard = `
        <div>
            <div>
            ${manager.name}</div>
            <ul>
            <li>ID: ${manager.id}</li>
            <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        frontPage.push(managerCard);
    };
    const createEngineer = engineer => {
        let engineerCard = `
        <div>
            <div>
            ${engineer.name}</div>
            <ul>
            <li>ID: ${engineer.id}</li>
            <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <a href="https://github.com/${engineer.github}" target="_blank"><li>GitHub: ${engineer.github}</li></a>
            </ul>
        </div>
        `;
        frontPage.push(engineerCard);

    };
    const createIntern = intern => {
        let internCard = `
        <div>
            <div>
            ${intern.name}</div>
            <ul>
            <li>ID: ${intern.id}</li>
            <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li>School: ${intern.school}</li>
            </ul>
        </div>
        `;
        frontPage.push(internCard);

    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].role === "Manager") {
            createManager(team[i]);
        };
        if (team[i].role === "Engineer") {
            createEngineer(team[i]);
        };
        if (team[i].role === "Intern") {
            createIntern(team[i]);
        };
    }

    return frontPage.join('');
};

module.exports = team => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>The Team</h1>
        </header>
    
        <main>${generateTeam(team)}</main>
    
    </body>
    </html>
    `;
}