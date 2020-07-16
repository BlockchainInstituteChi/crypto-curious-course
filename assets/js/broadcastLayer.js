var bc = new BroadcastChannel('test_channel');

function message_broadcast(message)
{   
    console.log('sending', message)
    bc.postMessage(message); 
}

bc.onmessage = function (ev) { 
    console.log('message received', ev)
    window.onMessageEvent(ev)
}

// Note: Must provide function 'onMessageEvent' to handle received messages

// Template: 
// 
// window.onMessageEvent = function ( ev ) {
//     console.log('handling event', ev)
//     if ( event.trigger === "test" ) {
//         console.log('test trigger!')
//     }   
// }
// 
