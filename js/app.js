function getPin () {
  const pin = generatePin()
  const pinString = pin + ''
  if (pinString.length === 4) {
    return pin
  } else {
    // console.log('Pin Not 4 Digit Found',)
    return getPin()
  }
}

function generatePin () {
  const random = Math.round(Math.random() * 10000)
  return random
}

document.getElementById('generate-pin').addEventListener('click', function () {
  const pin = getPin()

  const displayPinkField = document.getElementById('display-pin')
  displayPinkField.value = pin
  //display pin
})

document
  .getElementById('calculator')
  .addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumberFiled = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumberFiled.value

    if (isNaN(number)) {
      if (number === 'C') {
        typedNumberFiled.value = ''
      } else if (number === '<') {
        const digits = previousTypedNumber.split('')
        digits.pop()
        const remainingDigits = digits.join('')
        typedNumberFiled.value = remainingDigits
      }
    } else {
      const typedNumberFiled = document.getElementById('typed-numbers')

      const newTypedNumber = previousTypedNumber + number
      typedNumberFiled.value = newTypedNumber
    }
  })

document.getElementById('verify-pin').addEventListener('click', function () {
  const displayField = document.getElementById('display-pin')
  const currentPin = displayField.value

  const typedNumbersField = document.getElementById('typed-numbers')
  const typedNumber = typedNumbersField.value
  const pinSucessMessage = document.getElementById('pin-success')
  const pinFailedMessage = document.getElementById('pin-fail')

  if (currentPin === typedNumber) {
    pinSucessMessage.style.display = 'block'
    pinFailedMessage.style.display = 'none'
  } else {
    pinFailedMessage.style.display = 'block'
    pinSucessMessage.style.display = 'none'
  }
})
