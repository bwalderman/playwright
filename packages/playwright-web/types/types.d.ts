import type * as playwright from 'playwright';

declare type PlaywrightClientConnectOptions = {
    wsEndpoint: string;
    timeout?: number;
};

export declare class PlaywrightClient {
    private _playwright;
    private _ws;
    private _closePromise;
    static connect(options: PlaywrightClientConnectOptions): Promise<PlaywrightClient>;
    constructor(pw: typeof playwright, ws: WebSocket);
    playwright(): typeof playwright;
    close(): Promise<void>;
}
