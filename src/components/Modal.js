export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (!this.modal) return;

    const cancelButton = this.modal.querySelector('.cancel');
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        this.hide();
        const form = this.modal.querySelector('form');
        if (form) form.reset();
      });
    }
  }

  show() {
    if (this.modal) this.modal.style.display = 'block';
  }

  hide() {
    if (this.modal) this.modal.style.display = 'none';
  }
}