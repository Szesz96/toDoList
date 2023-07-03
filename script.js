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
        createToolsArea()
        ulList.append(newListElement)

        userInput.value = ''
        errorText.textContent = ''

    } else {
        errorText.textContent = 'Wpisz treść zadania'
    }
};

const createToolsArea = () => {
    const toolsArea = document.createElement('div')
    toolsArea.classList.add('tools')
    newListElement.append(toolsArea)
    
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsArea.append(completeBtn, editBtn, deleteBtn)
}



document.addEventListener('DOMContentLoaded', main)

