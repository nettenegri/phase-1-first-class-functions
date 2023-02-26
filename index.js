function receivesAFunction(callbackFunction) {
  callbackFunction();
}

function returnsANamedFunction(Gone) {
  return function namedFunction() {
    return `I'm not going anywhere!`;
  };
}

function returnsAnAnonymousFunction(Anonymous) {
  return function () {};
}
