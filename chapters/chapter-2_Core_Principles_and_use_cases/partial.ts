enum PRIORITY {
  DEFAULT,

  LOW,

  HIGH,
}

interface TodoItemProps {
  title: string;

  description: string;

  priority: PRIORITY;
}

class TodoItem {
  description?: string;

  title = "Default item title";

  priority = PRIORITY.DEFAULT;

  constructor(todoItemProps: Partial<TodoItemProps> = {}) {
    Object.assign(this, todoItemProps);
  }
}

const item = new TodoItem({ description: "Some description" });

console.debug(item.description); // prints "Some description"

console.debug(item.title); // prints "Some description"
