/*
class connectionHandler {
    constructor(username) {
        this.username = username;
    }

    ws = new WebSocket(`ws://log2420-nginx.info.polymtl.ca/chatservice?username=${model.username}`);
    ws.onmessage 
}
*/

var ws = new WebSocket(`ws://log2420-nginx.info.polymtl.ca/chatservice?username=${model.username}`)

ws.onmessage = function (event) {
    console.log(JSON.parse(event.data));
    let message = JSON.parse(event.data);
    switch(message.eventType) {
        case "onMessage":
            console.log("Message recu");
            model.addMessage(message.data);
            break;
        case "updateChannelsList":
            console.log("update les channels");
            model.setChannels(message.data);
            /*
            console.log(model.isActive("allo"));
            let bobo = new Channel("allo");
            console.log(bobo);
            model.addActiveChannel(bobo);
            console.log(model.isActive("allo"));
            
            let amessage = new Message("onGetChannel", "dbf646dc-5006-4d9f-8815-fd37514818ee");
            ws.send(JSON.stringify(amessage));
            */
            break;
        case "onJoinChannel":
            console.log("JoinChannel");
            break;
        case "onLeaveChannel":
            console.log("LeaveChannel");
            break;
        case "onError":
            console.log("ERREUR");
            console.log(message.data);
            model.handleError(message.data);
            break;
        case "onGetChannel":
            //console.log("getChannel");
            //console.log(message.data);
            model.setCurrentChannel(message.data);
            break;

    };
}

function sendJoinRequest(channelId) {
    let joinRequest = new Message("onJoinChannel", channelId);
    ws.send(JSON.stringify(joinRequest));
}

function sendLeaveRequest(channelId) {
    let leaveRequest = new Message("onLeaveChannel", channelId);
    ws.send(JSON.stringify(leaveRequest));
}

function getChannelRequest(channelId) {
    let channelRequest = new Message("onGetChannel", channelId);
    ws.send(JSON.stringify(channelRequest));
}

function addChannelRequest(channelName) {
    let addRequest = new Message("onCreateChannel", null, channelName);
    ws.send(JSON.stringify(addRequest));
}