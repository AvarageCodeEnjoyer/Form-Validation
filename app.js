
let inputValues = []

const form = document.querySelector('form')

const inputFail = document.querySelector('#inputFail')
const nameSpan = document.querySelector('#nameSpan')
const emailSpan = document.querySelector('#emailSpan')
const phoneSpan = document.querySelector('#phoneSpan')
const addressSpan = document.querySelector('#addressSpan')
const postCodeSpan = document.querySelector('#postCodeSpan')
const stateSpan = document.querySelector('#stateSpan')
const cardNumberSpan = document.querySelector('#cardNumberSpan')
const cardTypeSpan = document.querySelector('#cardTypeSpan')
const ccvSpan = document.querySelector('#ccvSpan')
const expirationSpan = document.querySelector('#expirationSpan')
const cardNameSpan = document.querySelector('#cardNameSpan')

const expDateInput = document.getElementById('expiration');

  expDateInput.addEventListener('input', () => {
    const value = expDateInput.value;
    if (value.length === 2 && !value.includes('/')) {
      expDateInput.value = value + '/';
    }
  })

// Loop through all inputs to check if they have a value, if not then dont submit the form
function loopInput() {
  console.log('loop')
  let inputs = document.querySelectorAll('input:not([type="radio"])')
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputFail.innerText = "fill in all inputs"
      return false
    }
    return true
  }
}

// Check if the loopInput function has a "true" return value and change text in span based on that 
function validateInputs(e) {
  console.log('validate input')
  if (loopInput() == true){
    validateForm(e)
    inputFail.innerText = ""
    console.log('works')
  }
  else {
    console.log('fail')
  }
}

// Validate all the inputs of the form to check against ReGex
function validateForm(e) {
  let nameInput = document.querySelector('#name').value
  let emailInput = document.querySelector('#email').value
  let phoneInput = document.querySelector('#phone').value
  let addressInput = document.querySelector('#address').value
  let postCodeInput = document.querySelector('#postCode').value
  let stateSelect = document.querySelector('select[name="state"]').value
  let selectedCard = document.querySelector('input[name="card"]:checked').value
  let cardNumber = document.querySelector('#cardNumber').value
  let cardNameInput = document.querySelector('#cardName').value
  let expirationInput = document.querySelector('#expiration').value
  let ccvInput = document.querySelector('#ccv').value

  // RegEx expressions for all the input types 
  let nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  let emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
  let phoneRegEx = /^\d{10}$/
  let addressRegEX = /^\d+\s+[\w\s]+\n?\s*[\w\s]+$/
  let postCodeRegEx = /^\d{5}(-\d{4})?$/
  let ccvRegEx = /^[0-9]{3,4}$/
  let cardRegex = [
    /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,  // Visa
    /^5[1-5][0-9]{14}$/,  // Mastercard
    /^3[47][0-9]{13}$/,  // American Express
    /^6(?:011|5[0-9][0-9])[0-9]{12}$/  // Discover
  ];
  let expirationRegEx = /^(0[1-9]|1[0-2])\/[0-9]{2}$/

  // Reset span tags with error codes
  nameSpan.innerText = ""
  emailSpan.innerText = ""
  phoneSpan.innerText = ""
  addressSpan.innerText = ""
  postCodeSpan.innerText = ""
  cardNameSpan.innerText = ""
  cardNumberSpan.innerText = ""
  ccvSpan.innerText = ""
  expirationSpan.innerText = ""

  // IF statements to  check the input to RegEx
  if (!nameRegEx.test(nameInput)) {
    e.preventDefault()
    nameSpan.innerText = 'Please enter a valid name.'
  }

  if (!emailRegEx.test(emailInput)) {
    e.preventDefault()
    emailSpan.innerText = 'Please enter a valid email address.'
  }

  if (!phoneRegEx.test(phoneInput)) {
    e.preventDefault()
    phoneSpan.innerText = 'Please enter a valid phone number.'
  }

  if (!addressRegEX.test(addressInput)) {
    e.preventDefault()
    addressSpan.innerText = 'Please enter a valid address.'
  }

  if (!postCodeRegEx.test(postCodeInput)) {
    e.preventDefault()
    postCodeSpan.innerText = 'Please enter a valid post code.'
  }

  switch (selectedCard) {
    case 'visa':
      if (!cardRegex[0].test(cardNumber)){
        e.preventDefault()
        cardNumberSpan.innerText = 'Please enter a valid Visa Card number.'
      }
      break

    case 'masterCard': 
      if (!cardRegex[1].test(cardNumber)){
        e.preventDefault()
        cardNumberSpan.innerText = 'Please enter a valid Master Card number.'
      }
      break

    case 'amEx': 
      if (!cardRegex[2].test(cardNumber)){
        e.preventDefault()
        cardNumberSpan.innerText = 'Please enter a valid American Express Card number.'
      }
      break
    
    case 'discover': 
      if (!cardRegex[3].test(cardNumber)){
        e.preventDefault()
        cardNumberSpan.innerText = 'Please enter a valid Discover Card number.'
      }
      break
  }

  if (!ccvRegEx.test(ccvInput)) {
    e.preventDefault()
    ccvSpan.innerText = 'Please enter a valid security code.'
  }

  if (!expirationRegEx.test(expirationInput)) {
    e.preventDefault()
    expirationSpan.innerText = 'Please enter a valid expiration date.'
  }

  if (!nameRegEx.test(cardNameInput)) {
    e.preventDefault()
    expirationSpan.innerText = 'Please enter a name on card'
  }

  // Push the values of the form to an array of objects
  inputValues.push({Name: nameInput, Email: emailInput, PhoneNumber: phoneInput, Address: addressInput, PostalCode: postCodeInput, State: stateSelect, CardType: selectedCard, CardNumber: cardNumber, CCV: ccvInput})
  
  // Clear console and console table the inputValues array 
  console.clear()
  console.table(inputValues)
}




