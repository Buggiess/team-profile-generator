const Manager = require ('../lib/manager');
describe('Manager', () => {
    describe("init", () => {
        it('should require office', () => {
            const manager = new Manager('Kristina', 1219956, 'akd@mail.com', 3902);
            expect('office' in manager).toBe(true);
        });
      });
      describe("getOffice", () => {
        it('should return office', () => {
            const manager = new Manager('Kristina', 1219956, 'akd@mail.com', 3902);
            expect(manager.getOffice()).toBe(3902);
        });
      });
});