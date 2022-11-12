import { taskArray, addToTask } from "./storage";
let num = 0;

export function createTaskObject(taskName, taskDesc, dueDate, prio) {
  var task = {
    name: taskName,
    description: taskDesc,
    date: dueDate,
    priority: prio,
    num: num,
  };
  num += 1;
  console.log(task);
  return task;
}
