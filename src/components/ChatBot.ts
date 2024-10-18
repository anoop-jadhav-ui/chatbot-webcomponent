class ChatBot extends HTMLElement {
  chatbot;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      </style>
      <div class="chat-bot">
        <chat-bubble></chat-bubble>
        <chat-window></chat-window>
      </div>
    `;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.chatbot = this.shadowRoot?.querySelector('.chat-bot');
  }
}

customElements.define('chat-bot', ChatBot);
