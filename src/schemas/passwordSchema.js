import {string} from 'yup';

const passwordSchema = string()
  .min(8, "Password must be at least 8 characters long.")
  .matches(/[a-zA-Z]/, "Password must contain at least one letter.")
  .matches(/\d/, "Password must contain at least one number.");

  export {
    passwordSchema
  }