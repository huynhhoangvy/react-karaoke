export default function registerValidate(values) {
  let errors = {};
  if (!values.email) {
      errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
  }
  if (!values.username) {
      errors.username = 'Username is required';
  } else if (values.password.length < 3) {
      errors.username = 'Username must be 3 or more characters';
  }
  if (!values.password) {
      errors.password = 'Password is required';
  } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};