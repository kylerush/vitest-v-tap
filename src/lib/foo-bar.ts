function fooBar(arg: boolean) {
  if (arg) {
    return { foo: "bar" };
  } else {
    return { foo: "no" };
  }
}

export { fooBar };
