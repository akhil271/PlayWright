const { test, expect } = require('@playwright/test');

test('Todo input handling', async ({ page }) => {
  // Navigate to TodoMVC demo
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Wait for input box to be visible
  await page.waitForSelector('.new-todo');

  // Add multiple todo items
  const todoItems = ['Buy groceries', 'Walk the dog', 'Finish homework'];
  for (const item of todoItems) {
    await page.fill('.new-todo', item);
    await page.keyboard.press('Enter');
  }

  // Verify all items were added
  await expect(page.locator('.todo-list li')).toHaveCount(todoItems.length);

  // Complete first todo
  const firstTodo = page.locator('.todo-list li').first();
  await firstTodo.locator('.toggle').check();

  // Verify it's marked completed
  await expect(firstTodo).toHaveClass(/completed/);

  // Filter completed items
  await page.click('a[href="#/completed"]');

  // Verify only completed items show
  await expect(page.locator('.todo-list li:visible')).toHaveCount(1);

  // Clear completed items
  await page.click('.clear-completed');

  // Switch back to 'All' to see remaining todos
  await page.click('a[href="#/"]');

  // Verify completed item is removed, remaining todos count
  await expect(page.locator('.todo-list li')).toHaveCount(todoItems.length - 1);

  // Optional: Verify remaining todo text
  const remainingTodos = await page.locator('.todo-list li').allTextContents();
  console.log('Remaining todos:', remainingTodos);
});
