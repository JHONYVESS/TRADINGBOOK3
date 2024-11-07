export class UI {
  static updateAuthState(isAuthenticated) {
    const authElements = document.querySelectorAll('.auth-required');
    const nonAuthElements = document.querySelectorAll('.non-auth-required');
    
    authElements.forEach(el => {
      el.style.display = isAuthenticated ? 'block' : 'none';
    });
    
    nonAuthElements.forEach(el => {
      el.style.display = isAuthenticated ? 'none' : 'block';
    });
  }

  static showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  }

  static hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
  }

  static resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) form.reset();
  }

  static showError(message, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const existingError = container.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    container.insertBefore(errorDiv, container.firstChild);
    setTimeout(() => errorDiv.remove(), 5000);
  }
}