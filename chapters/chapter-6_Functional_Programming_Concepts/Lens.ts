export interface Lens<T, A> {
  get: (obj: T) => A;
  set: (obj: T) => (newValue: A) => T;
}
function lensProp<T, A>(key: string): Lens<T, A> {
  return {
    get: (obj: T): A => obj[key],
    set:
      (obj: T) =>
      (value: A): T => ({ ...obj, [key]: value }),
  };
}

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    country: string;
  };
}

const nameLens: Lens<User, string> = lensProp("name");
const user: User = {
  name: "Theo",
  email: "theo@example.com",
  address: {
    street: "Pembroke ST",
    number: "22",
    city: "Dublin",
    country: "Ireland",
  },
};
console.log(nameLens.get(user)); // Theo
console.log(nameLens.set(user)("Alex"));
console.log(nameLens.get(user)); // Theo

function view<T, A>(lens: Lens<T, A>, obj: T): A {
  return lens.get(obj);
}

function set<T, A>(lens: Lens<T, A>, obj: T, value: A): T {
  return lens.set(obj)(value);
}

function over<T, A, B>(lens: Lens<T, A>, f: (x: A) => A, obj: T) {
  return lens.set(obj)(f(lens.get(obj)));
}

const prefixedName: User = over(
  nameLens,
  (name: string) => `Mr. ${name}`,
  user
);
console.log(view(nameLens, prefixedName)); // Mr. Theo

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}
interface TodoListState {
  allItemIds: string[];
  byItemId: { id: string; item: TodoItem };
}

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
      return {
        ...currentState,
        byItemId: {
          ...currentState.byItemId,
          [action.id]: {
            ...currentState.byItemId[action.id],
            completed: action.completed,
          },
        },
      };
  }
}
