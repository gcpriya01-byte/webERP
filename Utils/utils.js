
import { expect } from '@playwright/test';

class Utils {

    constructor(page) {
        this.page = page;
    }

   //Fill
    async fill(locator, value) {await locator.fill(value); }

    //CLick
    async click(locator) {await locator.click(); }

   //Verify Visible
    async verifyVisible(locator) {await expect(locator).toBeVisible();
    }
}

export default Utils;
