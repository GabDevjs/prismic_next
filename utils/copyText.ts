
/**
 * @description
 * Copies text to user clipboard
 *
 * @param {string} textCopy - Value to be copied to user clipboard
 * @param {Function} successCb  - Callback to execute on copy success
 * @param {Function} failureCb  - Callback to execute on copy error
 *
 * @returns {Promise<void>}
 */
export async function copyTextClipboard(
  textCopy: string, successCb: Function, failureCb: Function
) {
  if (textCopy != "" && textCopy != null) {
    await navigator.clipboard
      .writeText(textCopy)
      .then(() => {
        successCb();
      })
      .catch((err) => {
        console.error(err);
        failureCb();
      });
  } else {
    failureCb();
  }
}
