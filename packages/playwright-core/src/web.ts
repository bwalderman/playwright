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

import { Connection } from "./client/connection";
import type { Playwright } from "./client/playwright";

export class PlaywrightClient {
    public static async connect(): Promise<PlaywrightClient> {
        const connection = new Connection();
        const pw = await connection.initializePlaywright();
        return new PlaywrightClient(pw);
    }

    private constructor(private _pw: Playwright) {}
}