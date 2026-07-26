function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");

    const userText = input.value.toLowerCase();

    let botReply = "Sorry, I don't understand.";

    if (userText.includes("hello") || userText.includes("hi")) {
        botReply = "Hello! How can I help you?";
    } else if (userText.includes("how are you")) {
        botReply = "I'm doing great!";
    } else if (userText.includes("bye")) {
        botReply = "Goodbye! Have a nice day.";
    } else if (userText.includes("your name")) {
        botReply = "I am a Rule-Based Chatbot.";
    }

    chatbox.innerHTML += "<p><b>You:</b> " + input.value + "</p>";
    chatbox.innerHTML += "<p><b>Bot:</b> " + botReply + "</p>";

    input.value = "";
}
