/* Add your JavaScript to this file */
onload=function(){
    let email = this.document.querySelector('#email')
    let message = this.document.querySelector('.message')

    addEventListener('submit', (e) => {
        e.preventDefault()
        if(email.value == ''){
            message.innerHTML = 'Please enter a valid email address.'
            email.value = ''
        }
        else{
            message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`
            email.value = ''
        }
    })
}