const Engineer = require ('../lib/engineer');
describe('Engineer', () => {
    describe("init", () => {
        it('should require github', () => {
            const engineer = new Engineer('Whittington', 3191955, 'jwhit@mail.com', 'jwhittington');
            expect('github' in engineer).toBe(true);
        });
      });
      describe("getGithub", () => {
        it('should return school', () => {
            const engineer = new Engineer('Whittington', 3191955, 'jwhit@mail.com', 'jwhittington');
            expect(engineer.getGithub()).toBe('jwhittington');
        });
      });
});