
let inputValues = []


function validateForm(e) {
  let nameInput = document.querySelector('#name').value
  let emailInput = document.querySelector('#email').value
  let phoneInput = document.querySelector('#phone').value
  let addressInput = document.querySelector('#address').value
  let postCodeInput = document.querySelector('#postCode').value
  let stateSelect = document.querySelector('select[name="state"]').value
  let selectedCard = document.querySelector('input[name="card"]:checked').value
  let cardNumber = document.querySelector('#cardNumber').value
  let ccvInput = document.querySelector('#ccv').value


  let nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  let emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
  let phoneRegEx = /^\d{3}-\d{3}-\d{4}$/
  let addressRegEX = /^\d+\s+[\w\s]+\n?\s*[\w\s]+$/
  let postCodeRegEx = /^\d{5}(-\d{4})?$/
  let ccvRegEx = /^[0-9]{3,4}$/
  let cardRegex = [
    /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,  // Visa
    /^5[1-5][0-9]{14}$/,  // Mastercard
    /^3[47][0-9]{13}$/,  // American Express
    /^6(?:011|5[0-9][0-9])[0-9]{12}$/  // Discover
  ];



  if (!nameRegEx.test(nameInput)) {
    e.preventDefault()
    alert('Please enter a valid name.')
    return false
  }

  if (!emailRegEx.test(emailInput)) {
    e.preventDefault()
    alert('Please enter a valid email address.')
    return false
  }

  if (!phoneRegEx.test(phoneInput)) {
    e.preventDefault()
    alert('Please enter a valid phone number.')
    return false
  }

  if (!addressRegEX.test(addressInput)) {
    e.preventDefault()
    alert('Please enter a valid address.')
    return false
  }

  if (!postCodeRegEx.test(postCodeInput)) {
    e.preventDefault()
    alert('Please enter a valid post code.')
    return false
  }

  switch (selectedCard) {
    case 'visa':
      if (!cardRegex[0].test(cardNumber)){
        e.preventDefault()
        alert('Please enter a valid Visa Card number.')
        return false
      }
      break

    case 'masterCard': 
      if (!cardRegex[1].test(cardNumber)){
        e.preventDefault()
        alert('Please enter a valid Master Card number.')
        return false
      }
      break

    case 'amEx': 
      if (!cardRegex[2].test(cardNumber)){
        e.preventDefault()
        alert('Please enter a valid American Express Card number.')
        return false
      }
      break
    
    case 'discover': 
      if (!cardRegex[3].test(cardNumber)){
        e.preventDefault()
        alert('Please enter a valid Discover Card number.')
        return false
      }
      break
  }

  if (!ccvRegEx.test(ccvInput)) {
    e.preventDefault()
    alert('Please enter a valid security code.')
    return false
  }

  inputValues.push({Name: nameInput, Email: emailInput, PhoneNumber: phoneInput, Address: addressInput, PostalCode: postCodeInput, State: stateSelect, CardType: selectedCard, CardNumber: cardNumber, CCV: ccvInput})
  
  console.clear()
  console.table(inputValues)
}




