const loginForm = document.querySelector('form')

loginForm.addEventListener('submit', e => {
  e.preventDefault()

  const userMobileNoField = loginForm.querySelector('input[name=userMobileNo]')
  const userMobileNumber = userMobileNoField.value

    // todo: check if number exist before api is called

  // axios.post('/api/check_number', {
  //   phoneNumber: userMobileNumber
  // })
  // .then(response => {
    // if numbr is registered
    axios.post('https://testcode-wendell.herokuapp.com/api/generate_otp', {
      phoneNumber: userMobileNumber
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          window.localStorage.setItem('user', JSON.stringify({
            phoneNumber: userMobileNumber
          }))
          window.location.href = './enter-otp.html'
        }
      })

    //else show error
  // })
  
})
