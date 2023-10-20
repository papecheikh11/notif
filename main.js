async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let todoList = document.getElementById("todoList");

    // Pour afficher et cacher la notification
    let todoListFini = document.getElementById("todoListFini");
    const btnNotif = document.querySelector(".notif");
    btnNotif.addEventListener("click", () => {
      todoListFini.classList.toggle("isVisible");
    });
    let incremente = 0;

    data.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;
      // console.log(todo.title);

      const btnFini = document.createElement("button");
      btnFini.textContent = "Terminer";

      btnFini.addEventListener("click", () => {
        listItem.remove();
        todoList.insertBefore(listItem, todoList.firstChild);
        //Incrementation du boutton
        if (btnFini.textContent == "Terminer") {
          incremente++;
        btnNotif.dataset.counter = incremente;
        }
        else if(btnFini.textContent == "Non Terminer"){
          incremente--;
          btnNotif.dataset.counter = incremente;
        }
        // console.log(incremente);

        // Déplacer le todo vers les taches terminés
        todoListFini.appendChild(listItem);
        btnFini.textContent = "Non Terminer";

        btnFini.addEventListener("click", () => {
          listItem.remove();
          todoList.appendChild(listItem);
          btnFini.textContent = "Terminer";
        });
      });
      listItem.appendChild(btnFini);

      if (!todo.completed) {
        todoList.appendChild(listItem);
      }
    });

    // console.log(data);
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getTodo();
