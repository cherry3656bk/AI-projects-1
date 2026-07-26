// script.js - simple rule-based chatbot

const chat = document.getElementById('chat');
const form = document.getElementById('chat-form');
const input = document.getElementById('message');

function addMessage(sender, text){
  const wrapper = document.createElement('div');
  wrapper.className = 'msg ' + (sender === 'user' ? 'user' : 'bot');
  const bubble = document.createElement('div');
  bubble.className = 'bubble ' + (sender === 'user' ? 'user' : 'bot');
  bubble.textContent = text;
  wrapper.appendChild(bubble);
  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;
}

function botResponse(message){
  const m = message.toLowerCase().trim();

  if(m === '' ) return "Say something so I can respond!";

  // simple rule-based matching (contains / equals checks)
  if(m.includes('hello') || m === 'hi' || m === 'hey'){
    return 'Hello! Nice to meet you.';
  }

  if(m.includes('how are you') || m.includes("how r you") || m.includes('how are u')){
    return "I'm a simple bot — I'm doing fine, thanks! How about you?";
  }

  if(m.includes('your name') || m.includes('who are you')){
    return "I'm SimpleBot — a tiny rule-based chatbot.";
  }

  if(m.includes('bye') || m.includes('goodbye') || m.includes('see you')){
    return 'Goodbye! Have a great day.';
  }

  // fallback
  return "I don't understand that yet. Try saying 'hello', 'how are you', 'your name', or 'bye'.";
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const text = input.value;
  if(!text) return;
  addMessage('user', text);
  input.value = '';

  // simulate thinking
  setTimeout(()=>{
    const reply = botResponse(text);
    addMessage('bot', reply);
  }, 400);
});

// greeting from bot at start
addMessage('bot', "Hi! I'm SimpleBot. Try: 'hello', 'how are you', 'your name', or 'bye'.");
