const generateSite = (employees) => {
    return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link rel="stylesheet" href="../src/style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <title>Team Generator</title>
    </head>
    <body>
      <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
        <header><h1>My team</h1></header>
        
          <div >
          ${generateCards(employees)} 
          </div>
         
    </body>
  </html>`;
  };
  
  const getRoleIcon = function (role) {
    if (role === "Manager") {
      return '<i class="fas fa-glasses"></i>';
    } else if (role === "Engineer") {
      return '<i class="fas fa-mug-hot"></i>';
    } else if (role === "Intern") {
      return '<i class="fas fa-user-graduate"></i>';
    } else {
      return "";
    }
  };
  
  const getEmployeeAttributes = function (employee) {
    let role = employee.role;
  
    if (role === "Engineer") {
      return `<li class="list-group-item">GitHub: ${employee.github}</li>`;
    } else if (role === "Manager") {
      return `<li class="list-group-item">Office Number: ${employee.office}</li>`;
    } else if (role === "Intern") {
      return `<li class="list-group-item">School: ${employee.school}</li>`;
    } else {
      return "";
    }
  };
  
  const generateCards = function (employees) {
    const employeesHtml = employees.map(function (employee) {
      var employeeDiv = `
      <div class="card" style="width: 18rem;">
          <div class="card-header">${getRoleIcon(employee.role)} ${
        employee.role
      }</div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${employee.name}</li>
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${
                employee.email
              }">${employee.email}</a></span></li>
              ${getEmployeeAttributes(employee)}
          </ul>
      </div>
      `;
      return employeeDiv;
    });
  
    return [employeesHtml];
  };
  
  module.exports = generateSite;