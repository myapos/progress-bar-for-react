/**
 * Decamelizes a string with/without a custom separator (underscore by default).
 *
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 */
export const decamelize = (str: string, separator: string) => {
  separator = typeof separator === 'undefined' ? '-' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};
