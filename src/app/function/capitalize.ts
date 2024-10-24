export default function Capitalize(str: string) {
  if (str) {
    const arr = str.split(" ");
    const result = arr.map((e) => e[0].toUpperCase() + e.slice(1));
    return result.join(" ");
  }
  return "";
}
