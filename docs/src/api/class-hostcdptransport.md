# class: HostCDPTransport
* extends: [EventEmitter]

Provides a mechanism for Playwright to communicate with a host browser process when running in embedded mode.

## async method: HostCDPTransport.send
- returns: <[Browser]>

The host browser process uses this method to send a raw CDP message to Playwright.

### param: HostCDPTransport.send.message
- `message` <[Object]>

The message to send.

## event: HostCDPTransport.message
- argument: <[Object]>

Emitted by Playwright to send a CDP message to the host browser process.
