import { test, expect } from '@playwright/test';

test('Advanced Web Interactions Demo', async ({ page }) => {
    //step 1 : Setup and Navigation

  await page.goto('https://demoqa.com/alerts');
  await expect(page.getByRole('link')).toBeVisible();

  //step 2 : Handle a Simple Alert

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
     dialog.accept();
  });
  await page.locator('#alertButton').click();
  await expect(page.locator('#alertButton')).toBeVisible();

  //step 3 : Handle a Confirmation Alert (OK)

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.locator('#confirmButton').click();
  await expect(page.getByText('You selected Ok')).toBeVisible();

  // Step 4 : Navigate and Interact within a Frame
 
  await page.getByText('Nested Frames').click();
  await expect(page.locator('#frame1').contentFrame().locator('html')).toContainText('Parent frame');
  await expect(page.locator('#frame1').contentFrame().locator('iframe').contentFrame().getByRole('paragraph')).toContainText('Child Iframe');

  //Step 5 : Perform Complex Mouse Actions

  await page.goto('https://vinothqaacademy.com/mouse-event/');
  await page.getByRole('button', { name: 'Double Click Me' }).click();
  await expect(page.getByRole('button', { name: 'Double Click Me' })).toBeVisible();
 await page.locator('button', { hasText: 'Double Click Me' }).dblclick();
  await expect(page.getByText('Double Click Action is')).toBeVisible();
  console.log("Double click performed");
 
  await page.getByRole('button', { name: 'Right Click Me' }).click({
    button: 'right'
  });
  console.log("right click performed");
  await expect(page.getByRole('link', { name: 'Registration Form' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Mouse Event' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Mouse Event' })).toBeVisible();
  await page.getByRole('link', { name: 'Mouse Event' }).click();
  console.log('Hover performed');

//   step 6 : Execute Advanced Keyboard Inputs

  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Akhil');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Shift+Tab');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Dadhich');
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('Dadhich');

  //step 7 : Upload a File

  await page.goto('https://the-internet.herokuapp.com/upload');
   await page.waitForLoadState('load'); 
  await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();
 
  
  
  const filePath = path.join(__dirname, 'test_upload.txt');
  await page.locator('input#file-upload').setInputFiles(filePath);
await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
  await expect(page.getByText('test_upload.txt')).toBeVisible();

  console.log('All advanced interactions completed successfully.');

});