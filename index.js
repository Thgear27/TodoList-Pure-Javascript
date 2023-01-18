document.addEventListener('DOMContentLoaded', function () {
   let btnAdd = this.getElementById("btn-add");
   let btnsDelete = this.getElementsByClassName('btn-delete');
   let taskContainer = this.getElementById("tasks-container");
   let taskList = this.getElementsByClassName("task");
   let inputText = this.getElementById("input-text");
   let checkBoxes = this.getElementsByClassName("box");

   addActionBtnsDelete(btnsDelete, taskContainer);
   addActionCheckBox(checkBoxes);

   btnAdd.addEventListener('click', () => {
      let newTaskDiv = this.createElement('div');
      newTaskDiv.classList.add('task');
      newTaskDiv.id = `task-number-${taskList.length}`;
      newTaskDiv.innerHTML =
         `
         <input id="checkBox-${taskList.length}" class="box" type="checkbox" style="width:25px; height:25px"">
         <p id="p-${taskList.length}" class="task-name">${inputText.value}</p>
         <button id="btn-${taskList.length}" class="btn-delete">Delete</button>
      `;
      taskContainer.appendChild(newTaskDiv);
      addActionBtnsDelete(btnsDelete, taskContainer);
      addActionCheckBox(checkBoxes);
   })
});

function addActionCheckBox(checkBoxes) {
   for (let item of checkBoxes) {
      console.log(item);
      item.onclick = () => {
         let idStr = item.id.toString();
         let number = parseInt(idStr.charAt(idStr.length - 1));

         if (item.checked) {
            document.getElementById(`p-${number}`).classList.add("marked");
         } else {
            document.getElementById(`p-${number}`).classList.remove("marked");
         }
      }
   }
}

function addActionBtnsDelete(btnsDelete, taskContainer) {
   // console.log(list);
   for (let item of btnsDelete) {
      item.onclick = () => {
         let idStr = item.id.toString();
         let number = parseInt(idStr.charAt(idStr.length - 1));
         console.log(number);
         console.log(document.getElementById(`task-number-${number}`));
         if (document.getElementById(`task-number-${number}`) == undefined) return;
         taskContainer.removeChild(document.getElementById(`task-number-${number}`));
      }
   }
}
