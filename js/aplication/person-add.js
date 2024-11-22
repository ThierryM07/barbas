import { validateEmail, validateName, validatePassword, validateTel } from '../service/validator.js'
import { Person } from '../domain/person.js'

validateName()
validateEmail()
validateTel()
validatePassword()


submitform()

function getFormPerson (){
    const person = new Person ()
    person.name = document.querySelector("#nameInput").value 
    person.email = document.querySelector("#emailInput").value 
    person.phone = document.querySelector("#telInput").value 
    person.password = document.querySelector("#passwordInput").value 
   return person
}
function submitform () {
  const buttonSubmit = document.querySelector("#submitForm")
  buttonSubmit.addEventListener("click", () => {
         const person = getFormPerson ()
         console.log(person)
  })
}