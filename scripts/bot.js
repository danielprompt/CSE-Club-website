const chatIcon = document.getElementById('chat-icon');
const chatPopup = document.getElementById('chat-popup');
const chatContainer = document.getElementById('chat-popup-body');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Store responses in a more structured format
const responses = {
    "greetings": [  // Changed key name to "greetings"
        "Hello!",
        "Hi there!",
        "Hey!",
        "Greetings!"
    ],
    "help": [
        "How can I help you today?",
        "What do you need assistance with?",
        "I'm here to help."
    ],
    "what are you": [
        "I am a simple chatbot.",
        "I am a virtual assistant.",
        "I'm a computer program designed to chat."
    ],
    "interesting": [
        "That's interesting!",
        "I find that interesting too.",
        "Tell me more about it."
    ],
    "tell me more": [
        "Please tell me more.",
        "I'm listening.",
        "Go on..."
    ],
    "goodbye": [
        "Goodbye!",
        "Bye!",
        "See you later!",
        "Talk to you soon!"
    ],

    "join": [
        "Sure! Here's a link to join the club!"

    ],

    "default": [
        "I don't understand.",
        "Could you please rephrase that?",
        "I'm not sure what you mean.",
        "Sorry, I didn't get that."
    ]
};

function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = responses["default"]; // Default response

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey") || lowerCaseMessage.includes("greetings") || lowerCaseMessage.includes("what's up")) {
        botResponse = responses["greetings"];  // Use the "greetings" key
    }

    else if(lowerCaseMessage.includes("join"))
    {
        botResponse = responses["join"];
    }
    else {
        for (const key in responses) {
            if (lowerCaseMessage.includes(key)) {
                botResponse = responses[key];
                break; // Stop after finding the first matching keyword
            }
        }
    }

    // If the response is an array, pick a random one
    if (Array.isArray(botResponse)) {
        const randomIndex = Math.floor(Math.random() * botResponse.length);
        return botResponse[randomIndex];
    }
    return botResponse;
}

function sendAndReceiveMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage === '') return;

    addMessage('user', userMessage);
    userInput.value = '';

    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot-message', 'typing-indicator');
    typingIndicator.textContent = 'Typing...';
    chatContainer.appendChild(typingIndicator);

    setTimeout(() => {
        chatContainer.removeChild(typingIndicator);
        const botResponse = getBotResponse(userMessage);
        addMessage('bot', botResponse);
    }, 1500);
}

chatIcon.addEventListener('click', () => {
    chatPopup.classList.toggle('show');
});

sendButton.addEventListener('click', sendAndReceiveMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendAndReceiveMessage();
    }
});