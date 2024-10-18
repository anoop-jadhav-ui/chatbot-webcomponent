class ChatWindow extends HTMLElement {
  chatWindow;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      </style>
      <div class="chat-window-container">
        <header>Docubrain</header>
        <main></main>
        <footer><input type="text"></input></footer>
      </button>
    `;

    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.chatWindow = this.shadowRoot?.querySelector('.chat-window-container');
  }
}

customElements.define('chat-window', ChatWindow);
