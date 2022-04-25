export const phone_validator = (input: string) => {
  const cleaned = input.replace(/\D/g, '');
  console.log(cleaned);
  const match = cleaned.match(/^(\d)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? `+${match[1]} ` : '';
    return `${intlCode} (${match[2]})${match[3]}-${match[4]}`;
  }
  if (cleaned.length < 2) {
    return `+${cleaned.slice(0, 1)}`;
  } else if (cleaned.length < 3) {
    return `+${cleaned.slice(0, 1)}(${cleaned.slice(1, 4)})`;
  } else if (cleaned.length < 6) {
    return `+${cleaned.slice(0, 1)}(${cleaned.slice(1, 4)})${cleaned.slice(
      4,
      7,
    )}`;
  } else {
    return `+${cleaned.slice(0, 1)}(${cleaned.slice(1, 4)})${cleaned.slice(
      4,
      7,
    )}-${cleaned.slice(7, 12)}`;
  }
};
