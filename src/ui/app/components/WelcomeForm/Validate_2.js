const required = value => value ? undefined : 'Required';
const minLength = value => value.length <= 3 ? 'must be longer than 3' : undefined
export {required, minLength }
