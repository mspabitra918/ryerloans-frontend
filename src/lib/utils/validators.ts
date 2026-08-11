export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function formatSSN(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 5) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

export function isValidSSN(ssn: string) {
  const digits = ssn.replace(/\D/g, "");

  if (digits.length !== 9) {
    return false;
  }

  const area = digits.slice(0, 3);
  const group = digits.slice(3, 5);
  const serial = digits.slice(5, 9);

  // Invalid SSN areas:
  // 000, 666, 900–999
  if (area === "000" || area === "666" || Number(area) >= 900) {
    return false;
  }

  // Invalid group
  if (group === "00") {
    return false;
  }

  // Invalid serial
  if (serial === "0000") {
    return false;
  }

  return true;
}

export function calculateAge(month: string, day: string, year: string) {
  if (!month || !day || !year) {
    return null;
  }

  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));

  // Prevent invalid dates such as Feb 31
  if (
    birthDate.getFullYear() !== Number(year) ||
    birthDate.getMonth() !== Number(month) - 1 ||
    birthDate.getDate() !== Number(day)
  ) {
    return null;
  }

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const birthdayThisYear = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  if (today < birthdayThisYear) {
    age--;
  }

  return age;
}
