const textStore = {
  save(data: string): void {
    console.log(`Called 'save' from TextStore with data=${data}`);
  },
};

const proxyTextStore = new Proxy(textStore, {
  apply: function (target, that, args) {
    console.log(`Called 'save' from ProxyTextStore with data=${args}`);
    target.save(args[0]);
  },
});
proxyTextStore.save("Data");
