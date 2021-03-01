import { HTMLAttributes } from "react";

const serviceConfig: Record<string, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

console.log(serviceConfig.port); // prints 3000

serviceConfig.enablePayments;

type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";
const serviceConfigChecked: Record<
  ServiceConfigParams,
  string | number | boolean
> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

console.log(serviceConfig.basePath); // prints http://localhost

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


type OriginalTodoItemProps = Required<Partial<TodoItemProps>>; // type is same as TodoItemProps

type ButtonProps = Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onSubmit' | 'className' | 'onFocus'>;

type OriginalThemProps = {
    colors: string[],
    elevations: string[],
    margins: string[],
    defaultTypography: string;
}
type CustomThemeProps {
    colors: Set<string>;
}
type ThemeProps = Omit<OriginalThemProps, 'colors'> & { colors?: CustomThemeProps }

