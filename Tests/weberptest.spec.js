
import { test, expect } from '@playwright/test';
test('Weberp', async ({ page }) => {
    await page.goto('http://etestingplatform.com/webERP/');
    await page.locator('input[name="UserNameEntryField"]').fill('Admin');
    await page.locator('input[name="Password"]').fill('weberp');
    await page.locator('input[name="SubmitUser"]').click();
   
    // Sales Page
    await expect(page.getByText('Main Menu', { exact: true })).toBeVisible();
   await page.locator('a[href="index.php?Application=Sales"]').click();
   await page.getByText('Transactions', { exact: true })
   await expect( page.locator('a[href="/webERP/SelectOrderItems.php?NewOrder=Yes"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/CounterSales.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/CounterReturns.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/GeneratePickingList.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/SelectSalesOrder.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/SpecialOrder.php"]')).toHaveText('• Special Order');
    await expect(page.locator('a[href="/webERP/SelectRecurringSalesOrder.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/RecurringSalesOrdersProcess.php"]')).toBeVisible();
    await expect(page.locator('a[href="/webERP/SelectPickingLists.php"]')).toBeVisible();
    await page.waitForTimeout(5000);

    });