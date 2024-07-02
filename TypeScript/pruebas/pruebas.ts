export function isPangram(string: string) {
  let trasformacion = new Set(string.toLowerCase());
  console.log(trasformacion);
}

isPangram("abcdefghijklmnopqrstuvwxyz");
