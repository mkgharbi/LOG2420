var ws = new WebSocket(`ws://log2420-nginx.info.polymtl.ca/chatservice?username=${nom}`)

ws.onmessage = function (event) {
    console.log(event.data)
}