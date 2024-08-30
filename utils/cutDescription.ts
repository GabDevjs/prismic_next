const cutDescription = (text: string, number: number) => {
  if (text) {
    return text.slice(0, number) + "...";
  }
};

export default cutDescription;
