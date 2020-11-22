const { describe } = require('yargs')
const compraController = require('../../controller/compraController')

describe("compraController()", () => {
    it("deberia retorna true", () => {
        //Testing a boolean
        expect(compraController.validarTest()).toBeTruthy();
        //Another way to test a boolean
        expect(forgotPassword.validarTest()).toEqual(true);
    });
});