function printCard(id: string | number) {
  console.log(id.toUpperCase());
}

// lets narrow this down

function printCard(id: string | number): number | string {
  if (typeof id === "string") {
    // now that we narrowed the ids type down to string
    // we can use string methods due to inference
    return id.toUpperCase();
  } else {
    // now that we narrowed it down to number we can
    // multipy it by 3
    return id * 3;
  }
}
