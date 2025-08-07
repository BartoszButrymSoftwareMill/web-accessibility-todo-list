import { deleteSvg } from './utils';

const main = document.querySelector<HTMLElement>('main')!;
const announcement = document.getElementById('announcement')!;
const form = document.getElementById('form')!;
const textInputField = document.getElementById(
  'text-input-field'
) as HTMLInputElement;
const listContainer = document.getElementById('list-container')!;
const taskCounterElement = document.getElementById('task-counter')!;
const clearAllButton = document.getElementById('clear-all-button')!;
const dialogModal = document.getElementById(
  'dialog-modal'
)! as HTMLDialogElement;
const closeDialogButton = document.getElementById('close-dialog')!;

let taskCounter = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = textInputField.value.trim();

  if (task === '') {
    main.setAttribute('inert', '');
    return dialogModal.showModal();
  }

  appendNewTodo(task);
  clearInput(textInputField);
  incrementTaskCounter();
  announcement.textContent = 'Task added';
});

clearAllButton.addEventListener('click', () => {
  listContainer.innerHTML = '';
  taskCounter = 0;
  updateTaskCounter();
  setClearAllButtonState();
  announcement.textContent = 'All tasks deleted';
});

listContainer.addEventListener('click', (event) => {
  const checkbox = (event.target as HTMLInputElement).closest(
    'input[type="checkbox"]'
  ) as HTMLInputElement;
  const deleteButton = (event.target as HTMLButtonElement).closest(
    'button'
  ) as HTMLButtonElement;

  if (checkbox) {
    const isChecked = checkbox.checked;

    if (isChecked) decrementTaskCounter();
    else incrementTaskCounter();
  } else if (deleteButton) {
    deleteButton.closest('li')!.remove();
    announcement.textContent = 'Task deleted';
    textInputField.focus();

    if (
      !(deleteButton.previousElementSibling!.children[0] as HTMLInputElement)
        .checked
    ) {
      decrementTaskCounter();
    }

    setClearAllButtonState();
  }
});

closeDialogButton.addEventListener('click', () => {
  dialogModal.close();
});

dialogModal.addEventListener('close', () => {
  main.removeAttribute('inert');
  textInputField.focus();
});

function appendNewTodo(task: string) {
  const todoId = generateID();
  const liElement = createElement('li', null, listContainer);
  const divElement = createElement('div', null, liElement, {
    class: 'list-item-group',
  });
  createElement('input', null, divElement, {
    type: 'checkbox',
    id: todoId,
  });
  createElement('label', task, divElement, {
    for: todoId,
    class: 'list-item-label',
  });
  const deleteButtonElement = createElement('button', null, liElement, {
    class: 'delete-button',
  });
  deleteButtonElement.innerHTML = deleteSvg;
  setClearAllButtonState();
}

function generateID() {
  return crypto.randomUUID();
}

function createElement(
  tagName: keyof HTMLElementTagNameMap,
  textContent: string | null,
  parentNode: HTMLElement | null,
  attributes: Record<string, string> | null = null
) {
  const node = document.createElement(tagName);

  if (textContent) {
    const textNode = document.createTextNode(textContent);
    node.appendChild(textNode);
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
  }

  if (parentNode) {
    parentNode.appendChild(node);
  }

  return node;
}

function clearInput(input: HTMLInputElement) {
  input.value = '';
}

function updateTaskCounter() {
  taskCounterElement.textContent = taskCounter.toString();
}

function incrementTaskCounter() {
  taskCounter++;
  updateTaskCounter();
}

function decrementTaskCounter() {
  taskCounter--;
  updateTaskCounter();
}

function setClearAllButtonState() {
  if (document.querySelector('li') === null) {
    clearAllButton.setAttribute('disabled', '');
    clearAllButton.setAttribute('aria-disabled', 'true');
  } else {
    clearAllButton.removeAttribute('disabled');
    clearAllButton.removeAttribute('aria-disabled');
  }
}
