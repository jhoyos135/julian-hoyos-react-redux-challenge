/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = val => {
  const errors = {};
  if (!val.firstName || val.firstName.trim() === '') {
    // console.log('First Name is required');
    errors.firstName = 'Required';
  }
  // if (!val.lastName) {
  //   console.log('Last Name is required');
  //   errors.lastName = 'Required';
  // }
  return errors;
};
