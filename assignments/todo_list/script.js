let count = 0;

document.querySelector("#addTodo").onclick = function () {
  let input = document.querySelector("#todo_input").value;

  if(input.length === 0){
    alert('Please enter a task!');
  }else{
    document.querySelector(".todos").innerHTML += `<p key=${count}>
                                                      <span>${input}</span>
                                                      <button class="todoItems">Delete</button>
                                                    </p>`;
    count++;
    document.querySelector(".count").innerText = count;

    let todos = document.querySelectorAll(".todoItems");
    for (let i = 0; i < todos.length; i++) {
    todos[i].onclick = function () {
    this.parentNode.remove();
    count--;
    document.querySelector(".count").innerText = count;
    };
    }
  }
  
};
