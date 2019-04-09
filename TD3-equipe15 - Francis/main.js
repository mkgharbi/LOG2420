class ChannelView {
    updateChannelList(channels){
        console.log("Update la channel list avec");
        console.log(channels);    
        for (let i = 0; i < channels.length; i++) {
            var para = document.createElement("div");
            var node = document.createTextNode(channels[i].name);
            para.setAttribute("id", channels[i].id);
            para.appendChild(node);
            let element = document.getElementById("dynamicChannelList");
            element.appendChild(para);
        }
    }

    updateCurrentChannel(channel){
        console.log("Change le nom channel pour");
        console.log(channel.name);
    
    }

    addChannel(channel){

    }
}

class MessageView {
    loadChannel(channel){
        console.log("channelALLO")
    }

    addMessage(message) {

    }

}

class View {
    channelView = new ChannelView();
    messageView = new MessageView();
}
var view = new View();


class Model {
    firstConnexion = true;
    userName = "Default";
    channels = [];
    currentChannel;
    activeChannels = [];
   
    setChannels(channels) {
        this.channels = channels;
        if (this.firstConnexion == true) {
            this.setCurrentChannel(channels[0]);
            this.firstConnexion = false;
        }
        view.channelView.updateChannelList(channels);
    }

    addActiveChannel(channel) {
        if (this.isActive(channel.id) == false) {
            this.activeChannels.push(channel);
        }
    }

    isActive(id) {
        for (let i = 0; i < this.activeChannels.length; i++) {
            if (this.activeChannels[i].id == id) {
                return true;
            }
        }
        return false;
    }

    getIndexActiveChannel(id) {
        for (let i = 0; i < this.activeChannels.length; i++) {
            if (this.activeChannels[i].id == id) {
                return i;
            }
        }
    }

    setCurrentChannel(channel){
        this.currentChannel = channel;
        view.channelView.updateCurrentChannel(channel);
        view.messageView.loadChannel(channel);
    }

    addMessage(message) {
        if (this.isActive(message.channelId) == true) {
            let index = getIndexActiveChannel(message.channelId);
            this.activeChannels[index].messages.push(message);
            
            if (this.currentChannel.id == message.channelId){
                view.messageView.addMessage(message);
            }
            
        }
    }
  

}

var model = new Model();



/*
class Controller {

}





class channelView {

}

class messageView {

}
*/