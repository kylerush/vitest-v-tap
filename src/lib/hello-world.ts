function helloWorld(arg: boolean) {
  if (arg) {
    return { hello: "world" };
  } else {
    return { hello: "no" };
  }
}

export { helloWorld };
