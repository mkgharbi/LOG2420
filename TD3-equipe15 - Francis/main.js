class ChannelView {
    updateChannelList(unsortedChannels){
        console.log("Update la channel list avec");
        console.log(unsortedChannels);    
        
        //Sorting
        let channels = [];
        channels.push(unsortedChannels[0]);
        for (let i = 1; i < unsortedChannels.length; i++) {
            if (unsortedChannels[i].joinStatus == true) {
                channels.push(unsortedChannels[i]);
            }
        }
        for (let i = 1; i < unsortedChannels.length; i++) {
            if (unsortedChannels[i].joinStatus == false) {
                channels.push(unsortedChannels[i]);
            }
        }


        let parent = document.getElementById("dynamicChannelList");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
       
        for (let i = 0; i < channels.length; i++) {
            let channel = channels[i];
            let newChannel = document.createElement("div");
            newChannel.setAttribute("class", "channel");
            newChannel.setAttribute("id", channel.id);

            let icon = document.createElement("div");
            if (i == 0) {
                icon.setAttribute("class", "starIcon");
                let iconRef = document.createElement("i");
                iconRef.setAttribute("class", "fas fa-star");
                icon.appendChild(iconRef);
              

            }
            else if (channel.joinStatus == true) {
                icon.setAttribute("onclick", "leaveChannel(this.parentElement)");
                icon.setAttribute("class", "minusIcon");
                let iconRef = document.createElement("i");
                iconRef.setAttribute("class", "fas fa-minus");
                icon.appendChild(iconRef);
            }
            else {
                icon.setAttribute("onclick", "joinChannel(this.parentElement)");
                icon.setAttribute("class", "plusIcon");
                let iconRef = document.createElement("i");
                iconRef.setAttribute("class", "fas fa-plus");
                icon.appendChild(iconRef);
            }

            newChannel.append(icon);
            let channelName = document.createElement("div");
            channelName.setAttribute("class", "channelName");
            channelName.setAttribute("onclick", "selectChannel(this.parentElement)");
            let channelNameText = document.createTextNode(channel.name);
            channelName.appendChild(channelNameText);
            newChannel.appendChild(channelName);

            if (i == 0) {
                let defaultNode = document.createElement("div");
                defaultNode.setAttribute("class", "default");
                let defaultNodeText = document.createTextNode("défaut");
                defaultNode.appendChild(defaultNodeText);
                newChannel.appendChild(defaultNode);
            }

            
            parent.appendChild(newChannel);
        }
    }

  

    addChannel(channel){

    }
}

class MessageView {
    loadChannel(channel){
        console.log("On Load le channel")
    }

   

    addMessage(message) {

    }

}

class View {
    channelView = new ChannelView();
    messageView = new MessageView(); 
    
    updateCurrentChannel(channel){
        document.getElementById("dynamicCurrentGroup").innerHTML = channel.name;
        console.log("Change le nom channel pour");
        console.log(channel.name);
    
    }

    displayError(error) {
        window.alert(error);
    }

}
var view = new View();


class Model {
    firstConnexion = true;
    userName = "";
    channels = [];
    currentChannel;
    //activeChannels = [];
   
    setChannels(channels) {
        this.channels = channels;
        if (this.firstConnexion == true) {
            this.setCurrentChannel(channels[0]);
            this.firstConnexion = false;
        }
        view.channelView.updateChannelList(channels);
    }

 
/*
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
*/

    setCurrentChannel(channel){
        this.currentChannel = channel;
        view.updateCurrentChannel(channel);
        view.messageView.loadChannel(channel);
    }

    /*
    addMessage(message) {
        if (this.isActive(message.channelId) == true) {
            let index = getIndexActiveChannel(message.channelId);
            this.activeChannels[index].messages.push(message);
            
            if (this.currentChannel.id == message.channelId){
                view.messageView.addMessage(message);
            }
            
        }
    }
*/  

    handleError(error) {
        view.displayError("ERREUR: " + error);
    }

}

var model = new Model();

function joinChannel(parent) {
    sendJoinRequest(parent.id);
}

function leaveChannel(parent) {
    sendLeaveRequest(parent.id);
}
function selectChannel(parent) {
    getChannelRequest(parent.id);
}

document.getElementById("addChannelButton").addEventListener("click", function() {
    let newChannelName = prompt("Entrez le nom du nouveau groupe", "Nouveau Groupe");
    console.log(newChannelName);
    addChannelRequest(newChannelName);
})

/*
class Controller {

}





class channelView {

}

class messageView {

}
*/