import { string, object } from 'yup';

export const userDataSchema = object().shape({
  name: string().min(2).trim().notRequired(),
  email: string().email().notRequired()
});

export const userChangePasswordSchema = object().shape({
  currentPassword: string().min(8).required(),
  password: string().min(8).required(),
  passwordConfirm: string().min(8).required().test(
    'matching password', 
    "Password doesn't match",
    function(passwordConfirm) {
      return passwordConfirm ===this.parent.newPassword;
    })
});