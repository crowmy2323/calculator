let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks(filter = "") {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks
        .filter(task => task.text.includes(filter))
        .forEach((task, index) => {
          const li = document.createElement("li");
          li.className = task.done ? "completed" : "";
          li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">حذف</button>
          `;
          taskList.appendChild(li);
        });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();
      if (text !== "") {
        tasks.push({ text, done: false });
        saveTasks();
        renderTasks();
        input.value = "";
      }
    }

    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function clearTasks() {
      if (confirm("آیا مطمئن هستید که می‌خواهید همه تسک‌ها را حذف کنید؟")) {
        tasks = [];
        saveTasks();
        renderTasks();
      }
    }

    function searchTasks() {
      const filter = document.getElementById("searchInput").value.trim();
      renderTasks(filter);
    }
    renderTasks();
