export function range(start: number, end: number) {
  return [...Array(end).keys()].map((el) => el + start)
}
