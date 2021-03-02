export const checkEnable = (errors: any) => {
    console.log(errors, 'errors')
    if (JSON.stringify(errors) === '{}') {
      console.log('START')
    } else if (errors.email === '' && errors.password === '') {
      console.log('No Error')
    } else {
      console.log('Error is there')
      return true
    }
    return false
  }