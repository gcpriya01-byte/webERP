
import { expect } from '@playwright/test';

class Utils {

    constructor(page) {
        this.page = page;
    }

    // Fill text field
    async fill(locator, value) {await locator.fill(value); }

    // Click element
    async click(locator) {await locator.click(); }

     // Common visibility verification
    async verifyVisible(locator) {await expect(locator).toBeVisible();
    }
}

export default Utils;
