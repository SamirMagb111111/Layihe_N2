document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoSiyahi = document.getElementById('todo-siyahi');
    const sortButton = document.querySelector('.sort-button');
    const sortIcon = sortButton.querySelector('img');
    let ascendingOrder = true;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const todoText = input.value.trim();

        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete-button');
            li.appendChild(deleteButton);

            todoSiyahi.appendChild(li);
            input.value = '';
        }
    });

    todoSiyahi.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            const li = event.target.closest('li');
            li.remove();
        }
    });

    sortButton.addEventListener('mouseenter', function () {
        if (ascendingOrder) {
            sortIcon.src = '/Sekiller/siralama4.svg';
        } else {
            sortIcon.src = '/Sekiller/siralama3.svg';
        }
    });

    sortButton.addEventListener('mouseleave', function () {
        if (ascendingOrder) {
            sortIcon.src = '/Sekiller/siralama1.svg';
        } else {
            sortIcon.src = '/Sekiller/siralama2.svg';
        }
    });

    sortButton.addEventListener('click', function () {
        sortListItems();
        toggleSortIcon();
    });

    function sortListItems() {
        const items = Array.from(todoSiyahi.getElementsByTagName('li'));

        items.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            if (ascendingOrder) {
                return textA.localeCompare(textB);
            } else {
                return textB.localeCompare(textA);
            }
        });

        items.forEach(item => item.remove());
        items.forEach(item => todoSiyahi.appendChild(item));

        ascendingOrder = !ascendingOrder;
    }

    function toggleSortIcon() {
        if (ascendingOrder) {
            sortIcon.src = '/Sekiller/siralama1.svg';
        } else {
            sortIcon.src = '/Sekiller/siralama2.svg';
        }
    }
});
