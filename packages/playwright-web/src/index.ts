/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PlaywrightClient } from './playwrightClient'

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connect').addEventListener('click', async () => {
        const client = await PlaywrightClient.connect({ wsEndpoint: `ws://localhost:9223` });
        const playwright = client.playwright();
        const browser = await playwright.chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://bing.com');
        const title = await page.title();
        console.log(title);
        await browser.close();
        await client.close();
    });
});