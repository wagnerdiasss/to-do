let count = 0;

function addTask() {
    var taskInput = document.getElementById("taskInput");

    if (taskInput.value !== "") {
        count += 1;
        var taskList = document.getElementById("taskList");

        var id = count;
        var li = document.createElement("li");
        li.setAttribute("id", id)
        var label = document.createElement("label");
        label.innerHTML = taskInput.value
        var inputCheckbox = document.createElement("input");
        inputCheckbox.setAttribute("type", "checkbox");

        inputCheckbox.addEventListener("change", (evt) => {
            let toggled = inputCheckbox.checked;
            let parent = document.getElementById(id);
            if (toggled) {
                parent.classList.add("toggled")
            } else {
                parent.classList.remove("toggled")
            }
        })

        li.appendChild(inputCheckbox);
        li.appendChild(label);


        taskList.appendChild(li);

        taskInput.value = "";
    }
}


addEventListener("DOMContentLoaded", (event) => {
    console.log("carregou")
    let i = document.getElementById("taskInput");
    i.addEventListener("keypress", (ev) => {
        if(ev.key === "Enter"){
            addTask();
        }
    });
});