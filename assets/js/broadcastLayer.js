// use local storage for messaging. Set message in local storage and clear it right away
// This is a safe way how to communicate with other tabs while not leaving any traces
//
var bc = new BroadcastChannel('test_channel');

function message_broadcast(message)
{   
    // var bc = new BroadcastChannel('test_channel');
    bc.postMessage(message); 
    // console.log('sending message', message)
    // localStorage.setItem('message',JSON.stringify(message));
    // localStorage.removeItem('message');
}


// receive message
//
function message_receive(ev)
{
    console.log('message received', ev)
    if (ev.originalEvent.key!='message') return; // ignore other keys
    var message=JSON.parse(ev.originalEvent.newValue);
    if (!message) return; // ignore empty msg or msg reset

    // here you act on messages.
    // you can send objects like { 'command': 'doit', 'data': 'abcd' }
    if (message.command == 'doit') alert(message.data);

    // etc.
}

bc.onmessage = function (ev) { console.log('msg received', ev); }