
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function rendertodos(){

    listElement.innerHTML = '';

    for(todo of todos){
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'apagarTodo('+ posicao +')');

        var linkText = document.createTextNode('    Excluir');
        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }

}

rendertodos();

function adicionarTodo(){

    if(inputElement.value == ''){
        alert('insire algum dado!');
        return false;
    }else{
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    rendertodos();
    salvarDados();
    }
}

buttonElement.onclick = adicionarTodo;

function apagarTodo(posicao){
    // splice remove item da lista
    todos.splice(posicao, 1); 
    rendertodos();
    salvarDados();
}
function salvarDados(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}


