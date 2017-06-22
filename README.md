# Constellation Test Server

A quick script which emulates subscribing to and recieving updates from [Constellation](https://dev.mixer.com/reference/constellation/index.html) style events.

## Setup
1. Clone
1. `npm i`
1. Start with `node index.js`

The server defaults to running on 0.0.0.0:3000.

## Use

You can subscribe to the following events using standard [Constellation `livesubscribe` methods](https://dev.mixer.com/reference/constellation/index.html#methods_livesubscribe). Once subscribed you'll get events emitted that simulate what you'll see from the real constellation.

- `channel:id:followed`
- `channel:id:subscribed`
- `channel:id:resubscribed`
- `channel:id:resubShared`
- `channel:id:hosted`
- `channel:id:unhosted`

Unlike constellation you can also pass an `interval` to the `livesubscribe` params. This will control how often you receive a sample event that you subscribe to. `interval` is **NOT** supported for the real constellation.

For example:
`{"type": "method", "method": "livesubscribe", "params": {"events": ["channel:1:subscribed", "channel:1:followed"], "interval":1000}, "id": 42}`

You can always refer to our [Constellation Reference Guide](https://dev.mixer.com/reference/constellation/index.html) for more information about Constellation.

