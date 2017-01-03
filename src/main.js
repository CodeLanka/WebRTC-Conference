json = { "status": "success", "data": 
    { "channels": [ 
        { "name": "2channel 1", "attribute2": "dummy" }, 
        { "name": "channel 3", "attribute2": "dummy" }, 
        { "name": "1channel 2", "attribute2": "dummy" }, 
        { "name": "channel 4", "attribute2": "dummy" },  
        { "name": "gchannel 4", "attribute2": "dummy" },  
        { "name": "tchannel 4", "attribute2": "dummy" },  
        { "name": "zchannel 4", "attribute2": "dummy" },  
        { "name": "ucuhannel 4", "attribute2": "dummy" },  
        { "name": "xchannel 4", "attribute2": "dummy" },  
        { "name": "vchannel 4", "attribute2": "dummy" },  
        { "name": "channel 4", "attribute2": "dummy" },  
        { "name": "rchannel 4", "attribute2": "dummy" },  
        { "name": "tchannel 4", "attribute2": "dummy" },  
        { "name": "qchannel 4", "attribute2": "dummy" },  
        { "name": "hchannel 4", "attribute2": "dummy" },  
        { "name": "jchannel 4", "attribute2": "dummy" },  
        { "name": "vchannel 4", "attribute2": "dummy" },  
        { "name": "vchannel 4", "attribute2": "dummy" },    
        { "name": "tchannel 4", "attribute2": "dummy" },  
        { "name": "lchannel 4", "attribute2": "dummy" },  
        { "name": "ochannel 4", "attribute2": "dummy" },  
        { "name": "pchannel 4", "attribute2": "dummy" },  
        { "name": "kchannel 4", "attribute2": "dummy" },  
        { "name": "jchannel 4", "attribute2": "dummy" },  
        { "name": "hchannel 4", "attribute2": "dummy" },  
        { "name": "gchannel 4", "attribute2": "dummy" },  
        { "name": "mchannel 4", "attribute2": "dummy" },  
        { "name": "nchannel 4", "attribute2": "dummy" },   
        { "name": "rchannel 4", "attribute2": "dummy" },  
        { "name": "echannel 4", "attribute2": "dummy" },  
        { "name": "wchannel 4", "attribute2": "dummy" },  
        { "name": "ochannel 4", "attribute2": "dummy" } ]  
    } 
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

json = sortByKey(json.data.channels, 'name');
lastChar = "";
HTMLString = "";
jsonLength = json.length;
charList = "";

for (var i = 0; i < jsonLength; i++) {
    firstLetter = json[i].name.charAt(0).toUpperCase();
    if(!isNaN(firstLetter)) firstLetter = "#";
    if(firstLetter !== lastChar) {
        HTMLString += "<letter-element id='" + firstLetter + "'></letter-element>";
        charList += "<moveTo-element link='" + firstLetter + "'></moveTo-element>";
        lastChar = firstLetter;
    }
    HTMLString += "<channel-element title='" + json[i].name + "' description='" + json[i].attribute2 + "'></channel-element>";
}

document.getElementById("channels").innerHTML = charList + HTMLString;