
import { navBarComponentTemplate } from "./../components/nav-component/nav-component.js"


navBarComponentTemplate()


//Função para pegar os elementos
function getElement(elementSelector) {
    return document.querySelector(elementSelector)
}

//Função para preencher do conteúdo do elemento
function setContentElement(elementSelector, content) {
    const element = getElement(elementSelector)
    if (element) {
        element.innerHTML = content
    }
}

