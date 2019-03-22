var ws = new Websocket("ws://http://log2420-nginx.info.polymtl.ca");

ws.onmessage = function(event) {
    console.debug("WebSocket message received:", event);
};