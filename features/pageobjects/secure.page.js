const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage () {
        return $("h3[data-test='error']");
    }

    async checkErrorMessage(msg) {
        await expect(this.errorMessage).toHaveTextContaining(msg);
    }
}

module.exports = new SecurePage();
