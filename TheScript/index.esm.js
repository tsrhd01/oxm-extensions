// btnClick.js
function activate(api) {
  api.commands.register("hello", () => {
    console.log("Hello from plugin");
  });
}
function deactivate() {
  console.log("Plugin unloaded");
}
export {
  activate,
  deactivate
};
