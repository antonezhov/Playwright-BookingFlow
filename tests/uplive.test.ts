import { test, expect } from '@playwright/test';
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });

}
test('basic test', async ({ page }) => {
  await page.goto('https://www.upliveapp.com/living/542061081/67366181');
  
  for (let i = 0; i < 1000; i++) {
    await delay(6000);
    page.reload({
      waitUntil: 'load'
    })
  
    console.log('following stream')
    // if (i > 16) {
    //     console.log('finishing')
    //     break
    // }
}

});