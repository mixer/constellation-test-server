const events = require('./events');

const supportedMethods = ['livesubscribe', 'liveunsubscribe'];
const supportedEvents = Object.keys(events);

module.exports = class ConnectionHandler {
    constructor(ws) {
        console.log('Received new connection');
        this.ws = ws;
        this.timers = {};
        this.ws.send(JSON.stringify({ type: 'event', event: 'hello', data: { authenticated: false } }));
        this.ws.on('message', message => this.handleMessage(message));
        this.ws.on('close', () => this.cleanUp());
    }

    cleanUp() {
        Object.keys(this.timers).forEach(key => this.unsubscribe(key));
    }

    handleMessage(raw) {
        console.log(raw);
        const message = JSON.parse(raw.trim());

        if(message.type === 'method' && supportedMethods.includes(message.method)) {
            message.params.events.forEach(event => {
                if(message.method === 'livesubscribe') {
                    this.subscribe(event, message.params.interval || 1000);
                } else {
                    this.unsubscribe(event);
                }
            })
        }
    }

    subscribe(event, interval) {
        console.log(`subscribing to ${event}`);
        if (!supportedEvents.includes(event.split(':')[2])) {
            console.log(`Unsupported event ${event}`);
            return;
        }
        this.timers[event] = setInterval(() => this.emitEvent(event), interval);
    }

    unsubscribe(event) {
        clearInterval(this.timers[event]);
        delete this.timers[event];
    }

    addTimedEvent(fn, interval) {
        const timerId = setInterval(fn, interval)
        this.timers.push(timerId);
        return timerId;
    }

    emitEvent(event) {
        const type = event.split(':')[2];
        const packet = {
            type: 'event',
            event: 'live',
            data: {
                channel: event,
                payload: events[type]
            }
        }
        const payload = JSON.stringify(packet);
        console.log(payload);
        this.ws.send(payload);
    }
}
