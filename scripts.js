document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        displayUserMessage(userInput);
        fetchGptResponse(userInput);
        document.getElementById('userInput').value = ''; // Clear input field after sending
    }
});

function displayUserMessage(message) {
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${message}`;
    chatWindow.appendChild(userMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function fetchGptResponse(message) {
    // Replace 'https://api.example.com/gpt' with your actual GPT API endpoint
    // Replace 'YOUR_API_KEY_HERE' with your actual API key
    fetch('https://api.openai.com/v1/assistants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({ prompt: message })
    })
    .then(response => response.json())
    .then(data => {
        displayGptMessage(data.response);
    })
    .catch(error => console.error('Error:', error));
}

function displayGptMessage(message) {
    const chatWindow = document.getElementById('chatWindow');
    const gptMessage = document.createElement('div');
    gptMessage.textContent = `Assistant: ${message}`;
    chatWindow.appendChild(gptMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}
