const  forgotPassword  = require('../../controller/forgotPasswordController');

describe("forgotPassword()", () => {
    it("should return true", () => {
        //Testing a boolean
        expect(forgotPassword.forgotPassword()).toBeTruthy();
        //Another way to test a boolean
        expect(forgotPassword.forgotPassword()).toEqual(true);
    });
});