//form validations
export function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

export const validatePassword = (value) => {
  let error;
  const passwordRegex = /(?=.*[0-9])/;
  if (!value) {
    error = "*Password is required";
  } else if (value.length < 8) {
    error = "*Password must be 8 characters long.";
  } else if (!passwordRegex.test(value)) {
    error = "*Password must contain one number.";
  }
  return error;
};

export function validateField(value) {
  let error = undefined;
  if (!value) {
    error = "Field is required";
  }
  return error;
}
export function validateNumber(value) {
  let error;

  if (!value) {
    error = "Field is required";
  } else if (!/^[0-9]*$/.test(value)) {
    error = "must be a number";
  }

  return error;
}
