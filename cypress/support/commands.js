var itBlockErrors = {}; // Define an object to store errors for each 'it' block title globally
var totalFailedAssertionsByDescribe = {}; // Keep track of the total number of assertion failures for each "describe" block
Cypress.Commands.add('softAssert', { prevSubject: false }, function (actualValue, expectedValue, message) {
    return cy.wrap(null, { timeout: Cypress.config('defaultCommandTimeout') }).then(function () {
        try {
            expect(actualValue).to.equal(expectedValue, message);
        }
        catch (err) {
            var itBlockTitle = Cypress.currentTest.title;
            var describeBlockTitle = Cypress.currentTest.titlePath[0];
            // Initialize the count for the "describe" block if it doesn't exist
            totalFailedAssertionsByDescribe[describeBlockTitle] = totalFailedAssertionsByDescribe[describeBlockTitle] || 0;
            totalFailedAssertionsByDescribe[describeBlockTitle]++;
            if (!itBlockErrors[itBlockTitle]) {
                itBlockErrors[itBlockTitle] = [];
            }
            itBlockErrors[itBlockTitle].push({ message: message, error: err });
        }
    });
});
Cypress.Commands.add('assertAll', function () {
    var errors = itBlockErrors;
    itBlockErrors = {};
    if (Object.keys(errors).length > 0) {
        var errorMessages = Object.entries(errors).map(function (_a, index) {
            var title = _a[0], entries = _a[1];
            var errorMessage = entries.map(function (_a) {
                var error = _a.error;
                return ("".concat("=> " + error.message));
            }).join('\n\n');
            return "".concat(index + 1, ". Test Title: ").concat(title, "\n").concat(errorMessage);
        });
        var errorMessage = Object.entries(totalFailedAssertionsByDescribe).map(function (_a) {
            var describe = _a[0], count = _a[1];
            return "Total assertion failures in \"".concat(describe, "\": ").concat(count);
        }).join('\n');
        throw new Error("Soft assertion failed: Total it block failed (".concat(Object.keys(errors).length, ")\n").concat(errorMessages.join('\n'), "\n\n").concat(errorMessage));
    }
});



