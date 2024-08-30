export function handlePageItemClick(
  e: { preventDefault: () => void; target: { value: string; }; },
  setPage: (arg0: number) => void
) {
  e.preventDefault();
  setPage(parseInt(e.target.value));
}
