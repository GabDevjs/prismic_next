export function formationMonetaryNumbers(value: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; minimumFractionDigits: number; }) => any; }) {
  if (value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  } else {
    return "R$ 0,00";
  }
}
