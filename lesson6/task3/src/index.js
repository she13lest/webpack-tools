import { renderTasks } from "./list/renderer.js";
import { initToDoListHandlers } from "./list/todoList.js";
import { getTasksList } from "./list/tasksGateway.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((newTasksList) => {
    renderTasks(newTasksList);
  });

  initToDoListHandlers();
});
