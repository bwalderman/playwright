
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

 import * as channels from '../protocol/channels';
 import { Browser } from './browser';
 import { BrowserContext, prepareBrowserContextParams } from './browserContext';
 import { ChannelOwner } from './channelOwner';
 import { LaunchOptions, LaunchServerOptions, ConnectOptions, LaunchPersistentContextOptions, BrowserContextOptions } from './types';
 import { Connection } from './connection';
 import { Events } from './events';
 import { ChildProcess } from 'child_process';
 import { envObjectToArray } from './clientHelper';
 import { assert, headersObjectToArray, monotonicTime } from '../utils/utils';
 import * as api from '../../types/types';
 import { kBrowserClosedError } from '../utils/errors';
 import { raceAgainstTimeout } from '../utils/async';
 import type { Playwright } from './playwright';
 
export class HostCDPTransport extends ChannelOwner<channels.HostCDPTransportChannel> implements api.HostCDPTransport {
    static from(handle: channels.HostCDPTransportChannel): HostCDPTransport {
        return (handle as any)._object;
    }

    constructor(parent: ChannelOwner, type: string, guid: string, initializer: channels.HostCDPTransportInitializer) {
        super(parent, type, guid, initializer);

        this._channel.on('messageReceived', (params) => {
            this.emit('messageReceived', params.message);
        });
    }

    async sendMessage(message: Object): Promise<void> {
        await this._channel.sendMessage({ message });
    }
}