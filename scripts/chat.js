/* ============================
   FAQ BOT (vanilla JS)
   - Starts hidden; click floating button to toggle
   - Type 'hi' or 'hello' to see options
============================ */

document.addEventListener("DOMContentLoaded", function () {
  // DOM refs (guarded lookups)
  const botIcon = document.getElementById('faq-bot-icon');
  const chatWindow = document.getElementById('faq-chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBody = document.getElementById('chat-body');
  const chatInputContainer = document.getElementById('chat-input-container');

  // FAQs
  const faqs = {
    'what are your hours': "Our club is open from 12:30pm to 2:00pm, Mondays and Wednesdays.",
    'where are you located': "During those hours, we are in A121 (Library).",
    'how do i join the club': "Click 'Join Us' in the header to go to Engage and request membership.",
    'what events are coming up': "No events at the moment, but stay tuned!",
    'what is the membership fee': "No fee. You must be homed at Manchester campus and have a GPA above 2.5."
  };

  const optionLists = {
    initial: [
      'what are your hours',
      'where are you located',
      'how do i join the club',
      'what events are coming up',
      'what is the membership fee'
    ],
    followUp: ['ask another question', 'end conversation']
  };

  function toggleChatWindow() {
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
      chatBody.innerHTML = '<div class="bot-message">Hello! I\'m here to help with questions about our club. What would you like to know?</div>';
      chatInputContainer.style.display = 'flex';
      userInput.value = '';
      userInput.focus();
    } else {
      chatBody.innerHTML = '';
    }
  }

  function addMessage(sender, message) {
    const el = document.createElement('div');
    el.classList.add('message');
    if (sender === 'bot') {
      el.classList.add('bot-message');
      el.innerHTML = `<span>${message}</span>`;
    } else {
      el.classList.add('user-message');
      el.innerHTML = `<span>${message}</span>`;
      el.style.cssText = 'background-color:#0d6efd;color:white;padding:10px;border-radius:10px;align-self:flex-end;max-width:80%;';
    }
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function displayOptions(message, options) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('bot-options-message');

    const p = document.createElement('p');
    p.textContent = message;
    wrapper.appendChild(p);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('chat-options');

    options.forEach(text => {
      const btn = document.createElement('button');
      btn.classList.add('chat-option-btn');
      btn.textContent = text;
      btn.dataset.question = text;
      btn.addEventListener('click', handleOptionClick);
      optionsContainer.appendChild(btn);
    });

    wrapper.appendChild(optionsContainer);
    chatBody.appendChild(wrapper);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleOptionClick(e) {
    const selected = e.target.dataset.question;
    addMessage('user', selected);

    if (selected === 'ask another question') {
      setTimeout(() => displayOptions('What else would you like to know?', optionLists.initial), 300);
      return;
    }
    if (selected === 'end conversation') {
      setTimeout(() => addMessage('bot', 'Thank you for chatting! Have a great day.'), 300);
      return;
    }

    const answer = faqs[selected] || "I don't have an answer for that yet.";
    setTimeout(() => displayOptions(answer, optionLists.followUp), 300);
  }

  function sendMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;
    addMessage('user', text);
    userInput.value = '';

    if (text === 'hi' || text === 'hello') {
      setTimeout(() => displayOptions('Hello! What would you like to know?', optionLists.initial), 300);
    } else {
      setTimeout(() => addMessage('bot', "Start with 'hi' or 'hello' to see some options."), 300);
    }
  }

  // Events
  if (botIcon) {
    botIcon.addEventListener('click', toggleChatWindow);
    botIcon.addEventListener('keypress', (e) => { if (e.key === 'Enter') toggleChatWindow(); });
  }
  if (closeBtn) closeBtn.addEventListener('click', toggleChatWindow);
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (userInput) userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
});
