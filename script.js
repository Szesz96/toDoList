let userInput;
let errorText;
let ulList;
let addBtn;
let newListElement

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
};

const prepareDOMElements = () => {
	userInput = document.querySelector('.todo-input');
	errorText = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('ul');
};

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addListElement)
};

const addListElement = () => {
    if (userInput.value !== '') {
        newListElement = document.createElement('li')
        newListElement.textContent = userInput.value
        ulList.append(newListElement)
        userInput.value = ''
        errorText.textContent = ''

    } else {
        errorText.textContent = 'Wpisz treść zadania'
    }
};



document.addEventListener('DOMContentLoaded', main)

