export default function loginValidate(values) {
    let errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.password.length < 3) {
      errors.username = 'Username must be 3 or characters';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };
  