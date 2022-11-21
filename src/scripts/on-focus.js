const inputEl = document.getElementById('phone-number');
const labelEl = document.getElementById('labelEl');
const inputMessageEl = document.getElementById('valid-message');
const resultEl = document.getElementById('result-message');
const errorMessageEl = document.getElementById('warn-message');

const changeLabelVisibility = () => {
  if (labelEl.classList.contains('hidden') && !inputEl.value.trim()) {
    labelEl.classList.remove('hidden');
  } else {
    labelEl.classList.add('hidden');
  }

  checkWarning();
};

const checkWarning = () => {
  if (!inputMessageEl.classList.contains('hidden-message')) {
    inputMessageEl.classList.add('hidden-message');
  } else if (!resultEl.classList.contains('hidden-message')) {
    resultEl.classList.add('hidden-message');
  } else if (!errorMessageEl.classList.contains('hidden-message')) {
    errorMessageEl.classList.add('hidden-message');
  }
};


inputEl.addEventListener('focus', changeLabelVisibility);
inputEl.addEventListener('blur', changeLabelVisibility);