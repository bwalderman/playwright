# class: HostCDPChannel
* extends: [EventEmitter]

Page provides methods to interact with a single tab in a [Browser], or an
[extension background page](https://developer.chrome.com/extensions/background_pages) in Chromium. One [Browser]
instance might have multiple [Page] instances.

This example creates a page, navigates it to a URL, and then saves a screenshot:

```js
a
```

```python async
a
```

```python sync
a
```

```csharp
a
```

## async method: HostCDPChannel.send
- returns: <[Browser]>

This methods attaches Playwright to an existing browser instance using the Chrome DevTools Protocol.

The default browser context is accessible via [`method: Browser.contexts`].

:::note
Connecting over the Chrome DevTools Protocol is only supported for Chromium-based browsers.
:::

### param: HostCDPChannel.send.message
- `message` <[Object]>

URL to navigate page to. The url should include scheme, e.g. `https://`.
When a [`option: baseURL`] via the context options was provided and the passed URL is a path,
it gets merged via the [`new URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor.