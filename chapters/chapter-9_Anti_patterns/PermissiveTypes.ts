interface Callback {
  onEvent: Function;
}

const callBack1: Callback = {
  onEvent: (a: string) => a,
};

const callBack2: Callback = {
  onEvent: () => "a",
};

const callBack3: Callback = {
  onEvent: () => 1,
};
