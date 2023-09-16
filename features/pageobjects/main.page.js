import Page from './page.js';

class MainPage extends Page {
    get btnSubmit () {
        return $('#login-button');
    }

    get userReqMsg () {
        return $('[data-test="error"]')
    }

    async clickLoginBtn () {
        await this.btnSubmit.click();
    }

    async checkErrorMsg (message) {
        await expect(this.userReqMsg).toBeExisting();
        await expect(this.userReqMsg).toHaveText(message);
    }

    open () {
        return super.open('');
    }
}

export default new MainPage();
