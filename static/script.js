var ws = new WebSocket("ws://" + location.host + "/ws");

ws.onmessage = function(event) {
    var messages = document.getElementById('messages');
    var message = document.createElement('li');
    var content = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
};

function sendMessage(event) {
    var input = document.getElementById("input");
    if (input.value) {
        ws.send(input.value);
        input.value = '';
    }
    event.preventDefault();
}
