// script.js
import { Auth } from './src/components/Auth.js';
import { TradingJournal } from './src/components/TradingJournal.js';

let auth, journal;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Auth first
  auth = new Auth();
  window.auth = auth;

  // Initialize window functions
  window.showAuthModal = (mode) => {
    const authModal = document.getElementById('authModal');
    const authTitle = document.getElementById('authTitle');
    authTitle.textContent = mode === 'login' ? 'Login' : 'Sign Up';
    authModal.style.display = 'block';
    window.currentAuthMode = mode;
  };

  // Setup auth form handler
  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(authForm);
      const email = formData.get('email');
      const password = formData.get('password');

      try {
        if (window.currentAuthMode === 'login') {
          await auth.signIn(email, password);
        } else {
          await auth.signUp(email, password);
        }
        document.getElementById('authModal').style.display = 'none';
        authForm.reset();
        journal = new TradingJournal();
        window.journal = journal; // Make journal globally accessible
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Setup modal close handlers
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const cancelButton = modal.querySelector('.cancel');
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
        const form = modal.querySelector('form');
        if (form) form.reset();
      });
    }
  });

  // Initialize journal if user is already authenticated
  auth.auth.onAuthStateChanged((user) => {
    if (user) {
      journal = new TradingJournal();
      window.journal = journal; // Make journal globally accessible
    }
  });
});

// Export functions for global use
window.editTrade = async function(tradeId) {
  if (window.journal) {
    window.journal.editTrade(tradeId);
  }
};

window.deleteTrade = async function(tradeId) {
  if (window.journal) {
    window.journal.deleteTrade(tradeId);
  }
};