let value = "v2";

switch (value) {
  case "v1": {
    return console.log("v1");
  }
  case "v2": {
    console.log("v2");
  }
  case "v3": {
    console.log("v3");
    break;
  }
  case "v4": {
    console.log("v4");
  }
}

value = "v1";

switch (value) {
  case "v1":
    const name = "john";
    console.log(name);
  case "v2": {
    const name = "tobe";
    console.log(name);
  }
  default:
    console.log(name);
}
