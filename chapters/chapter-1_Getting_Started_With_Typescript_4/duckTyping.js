export function triggerNotification(emailClient, logger) {
  if (logger && typeof logger.log === "function") {
    logger.log("Sending email");
  }
  if (emailClient && typeof emailClient.send === "function") {
    emailClient.send("Message Sent");
  }
}

triggerNotification(
  { log: () => console.log("Logger call") },
  { send: (msg) => console.log(msg) }
); // Nothing!
triggerNotification(
  { send: (msg) => console.log(msg) },
  { log: () => console.log("Logger call") }
); // Works!
