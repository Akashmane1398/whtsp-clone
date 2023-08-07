window.onload = function() {
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');

    sendButton.onclick = function() {
        var message = messageInput.value.trim();
        if (message !== '') {
            var messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
        }
    };

    messageInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
};
