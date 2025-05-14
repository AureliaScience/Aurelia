export function notify(msg) {
  if (window.Notification && Notification.permission === "granted") {
    new Notification("Aurelia Alert", { body: msg });
  }
}