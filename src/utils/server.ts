export default function checkIsServer(): boolean {
  return typeof window === "undefined";
}
