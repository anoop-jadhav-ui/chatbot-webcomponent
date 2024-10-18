class ChatBubble extends HTMLElement {
  isChatOpen = false;
  button;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        button {
          background-color: #6200ea;
          color: white;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
        }
      </style>
      <button>Toggle Chat</button>
    `;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    this.button = this.shadowRoot?.querySelector('button');
    this.button?.addEventListener('click', this.toggleChatButton);
  }

  // Method to toggle chat status
  toggleChatButton() {
    this.isChatOpen = !this.isChatOpen;
    console.log(this.isChatOpen ? 'Chat opened' : 'Chat closed');
  }
}

customElements.define('chat-bubble', ChatBubble);
