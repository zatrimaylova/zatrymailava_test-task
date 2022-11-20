const inputEl = document.getElementById('phoneNumber');
const labelEl = document.getElementById('labelEl');

const changelabelVisibility = () => {
  if (labelEl.classList.contains('hidden') && !inputEl.value.trim()) {
    labelEl.classList.remove('hidden');
  } else {
    labelEl.classList.add('hidden');
  }
};


inputEl.addEventListener('focus', changelabelVisibility);
inputEl.addEventListener('blur', changelabelVisibility);