# class: Host

Host provides methods to interact with the hosting browser process when Playwright is running in embedded mode.

## async method: Host.initialize
- returns: <[HostCDPTransport]>

Called once by the embedder to establish a communication channel between Playwright and the embedder.

## async method: Host.connect
- returns: <[Browser]>

This methods attaches Playwright to the host browser process using the Chrome DevTools Protocol transport
established with a call to Host.initialize.
