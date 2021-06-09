import { pipe } from "fp-ts/lib/function";
import { Lens } from "monocle-ts";
import { modify, prop } from "monocle-ts/lib/Lens";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}
interface TodoListState {
  allItemIds: string[];
  byItemId: { [prop: string]: TodoItem };
}

const byItemId = Lens.fromProp<TodoListState>()("byItemId");
interface UpdateTodoItemCompletedAction {
  type: "UPDATE_TODO_ITEM_COMPLETED";
  id: string;
  completed: boolean;
}
function reduceState(
  currentState: TodoListState,
  action: UpdateTodoItemCompletedAction
): TodoListState {
  switch (action.type) {
    case "UPDATE_TODO_ITEM_COMPLETED":
      return pipe(
        byItemId,
        prop(action.id),
        prop("completed"),
        modify((completed: boolean) => action.completed)
      )(currentState);
  }
}
const currentState: TodoListState = {
  allItemIds: ["1"],
  byItemId: {
    "1": {
      id: "1",
      title: "Buy milk",
      completed: false,
    },
  },
};
console.log(
  reduceState(currentState, {
    type: "UPDATE_TODO_ITEM_COMPLETED",
    id: "1",
    completed: true,
  })
);
