# class: Host

Host provides methods to interact with the hosting browser process when Playwright is running in embedded mode.

## async method: Host.initialize

Called once by the embedder to establish a communication channel between Playwright and the embedder.

### param: Host.initialize.transport
- `transport` <[HostCDPTransport]>

A transport object that Playwright can use to connect to the host browser process. The embeding host browser
should add an event listen on the transport object to be notified when Playwright sends a CDP request.


## async method: Host.connect
- returns: <[Browser]>

This methods attaches Playwright to the host browser process using the Chrome DevTools Protocol transport
established with a call to Host.initialize.
