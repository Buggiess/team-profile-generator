const Intern = require ('../lib/intern');
describe('Intern', () => {
    describe("init", () => {
        it('should require school', () => {
            const intern = new Intern('Evelyn', 3142001, 'egenelle@mail.com', 'UNC Asheville');
            expect('school' in intern).toBe(true);
        });
      });
      describe("getSchool", () => {
        it('should return school', () => {
            const intern = new Intern('Evelyn', 3142001, 'egenelle@mail.com', 'UNC Asheville');
            expect(intern.getSchool()).toBe('UNC Asheville');
        });
      });
});