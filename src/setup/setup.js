/* eslint-env browser */
document.addEventListener('DOMContentLoaded', () => {
  const domainInput = document.getElementById('domain-input');
  const saveButton = document.getElementById('save-button');
  const errorMessage = document.getElementById('error-message');

  saveButton.addEventListener('click', async () => {
    const domain = domainInput.value.trim();
    if (!domain) {
      errorMessage.textContent = 'Please enter a domain.';
      return;
    }

    try {
      await window.__PSTREAM_SETUP__.saveDomain(domain);
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
});
