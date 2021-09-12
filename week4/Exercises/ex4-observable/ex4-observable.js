function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber)
    },
    notify: function (message) {
      subscribers.forEach(msg => msg(message))

    },
  };
}

module.exports = createObservable;