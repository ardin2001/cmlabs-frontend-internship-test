export default function FormaterDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toDateString();
}
