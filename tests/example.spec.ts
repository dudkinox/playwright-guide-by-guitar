import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://shopee.co.th");

  // ต้องชื่อนี้เท่านั้น
  await expect(page).toHaveTitle(
    "Shopee Thailand | ซื้อขายผ่านมือถือ หรือออนไลน์"
  );
});

test("get started link", async ({ page }) => {
  await page.goto("https://shopee.co.th");

  // คลิ๊ก id มีชื่อว่า Get started
  const selectLang = page.$(
    "#modal > div._0lq1fU > div.lM2FoF > div > div.language-selection__list > div:nth-child(1) > button"
  );

  // รอ state โหลดเสร็จ
  await page.waitForLoadState("networkidle");

  // คลิ๊ก
  await selectLang?.then((e) => e?.click());
});
