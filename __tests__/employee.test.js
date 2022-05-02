const Employee = require('../lib/employee');

describe("employee", () => {
    describe("init", () => {
      it('should require name, id, and email', () => {
          const employee = new Employee('Elinor', 8675309, 'erigs@mail.com');
          expect('name' in employee).toBe(true);
          expect('id' in employee).toBe(true);
          expect('email' in employee).toBe(true);
      });
    });
    describe("getName", () => {
      it('should return name', () => {
          const employee = new Employee('Fergus', 8194000, 'fergie@mail.com');
          expect(employee.getName()).toBe('Fergus');
      });
    });
    describe("getId", () => {
        it('should return id', () => {
            const employee = new Employee('Fergus', 8194000, 'fergie@mail.com');
            expect(employee.getId()).toBe(8194000);
        });
      });
      describe("getEmail", () => {
        it('should return email', () => {
            const employee = new Employee('Fergus', 8194000, 'fergie@mail.com');
            expect(employee.getEmail()).toBe('fergie@mail.com');
        });
      });
});