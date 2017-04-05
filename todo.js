function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('tdTask').value;
if ($('#tdTask').val() !== "") {
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    $('#tdTask').val("");
}
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<span class="remove pull-right" id="' + i  + '"><i class="fa fa-trash" aria-hidden="true"></i></span></li>';
    };
    html += '</ul>';
    console.log(html);
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();

//<i class="fa fa-trash" aria-hidden="true"></i>
