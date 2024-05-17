const template = document.createElement('template');
template.innerHTML = `
  <style>
    .book-preview {
      border: 1px solid #ddd;
      padding: 16px;
      border-radius: 8px;
      margin: 16px 0;
      display: flex;
      align-items: center;
      font-family: 'Roboto', sans-serif;
    }
    .book-preview img {
      max-width: 100px;
      margin-right: 16px;
    }
    .book-preview__details {
      flex: 1;
    }
    .book-preview__title {
      font-size: 1.2em;
      margin: 0;
    }
    .book-preview__author {
      color: #555;
    }
  </style>
  <div class="book-preview">
    <img class="book-preview__image" />
    <div class="book-preview__details">
      <h2 class="book-preview__title"></h2>
      <p class="book-preview__author"></p>
    </div>
  </div>
`;

class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.book-preview__image').src = this.getAttribute('image');
    this.shadowRoot.querySelector('.book-preview__title').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('.book-preview__author').innerText = this.getAttribute('author');
  }
}

window.customElements.define('book-preview', BookPreview);
// app-header.js
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
    /* Add header styles */
  </style>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <!-- Logo SVG -->
      </div>
      <div>
        <button class="header__button" data-header-search>
          <!-- Search icon SVG -->
        </button>
        <button class="header__button" data-header-settings>
          <!-- Settings icon SVG -->
        </button>
      </div>
    </div>
  </header>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('[data-header-search]').addEventListener('click', () => {
      // Handle search click
    });
    this.shadowRoot.querySelector('[data-header-settings]').addEventListener('click', () => {
      // Handle settings click
    });
  }
}

window.customElements.define('app-header', AppHeader);