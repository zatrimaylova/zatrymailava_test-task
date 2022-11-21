const urlValidate = 'https://phonevalidation.abstractapi.com/v1/?api_key=71c4acd069594deca89943e75e215fe7&phone=';

const inputEl = document.getElementById('phone-number');
const submitEl = document.getElementById('form');
const resultEl = document.getElementById('result-message');
const validationEl = document.getElementById('validation');
const resultMessageEl = document.getElementById('result');
const inputMessageEl = document.getElementById('valid-message');
const errorMessageEl = document.getElementById('warn-message');

const sendData = async (phone) => {
  try {
    let response = await fetch(`${urlValidate}${phone}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    });
    
    let result = await response.json();
  
    return result.valid;
  } catch(error) {
    errorMessageEl.classList.remove('hidden-message');
  }
};

const showWarning = () => {
  inputMessageEl.classList.remove('hidden-message');
};

const showValidationResult = (result) => {
  resultEl.classList.remove('hidden-message');

  if (result) {
    validationEl.innerHTML = "корректный";
    validationEl.classList.add('valid');
  } else {
    validationEl.innerHTML = "некорректный";
    validationEl.classList.remove('valid');
  }
};

const validateInputValue = () => {
  const value = inputEl.value.trim();

  return value ? true : false;
};

const submitListener = async (e) => {
  e.preventDefault();
  
  const customValidation = validateInputValue();

  if (customValidation) {
    const validationRes = await sendData(inputEl.value.trim());
    showValidationResult(validationRes);
  } else {
    showWarning();
  }
};

submitEl.addEventListener('submit', (e) => submitListener(e));