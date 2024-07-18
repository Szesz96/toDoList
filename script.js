let userInput;
let errorText;
let ulList;
let addBtn;
let newListElement

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
};

const prepareDOMElements = () => {
	userInput = document.querySelector('.todo-input');
	errorText = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('ul');

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
};

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addListElement)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    userInput.addEventListener('keyup', enterKeyCheck)
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

const checkClick = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInput.value = ''
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'You have to type something'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')

    if(allTodos.length === 0){
        errorText.textContent = 'No tasks to do'
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter') {
        addListElement()
    }
}

document.addEventListener('DOMContentLoaded', main)


