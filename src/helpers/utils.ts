export function replaceUnderscoresWithSpaces(input: string): string {
  const replacedString = input.replace(/_/g, ' ');
  return replacedString;
}

export const convertToSnakeCase = (value: string) => value.replace(/ /g, "_");

