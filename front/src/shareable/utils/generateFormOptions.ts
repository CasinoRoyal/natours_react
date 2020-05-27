//type: text, email, password, confirm

export const validator = (
    value: string, 
    type: string, 
    confirmValue?: string
): string | null | void  => {

  if (!value || !type) {
    return;
  };

  let regex: RegExp;

  switch (type) {
    case 'text':
      const res = value.trim();
      if (!res) {
        return 'Username must contain 2 or more characters';
      };
      return null;

    case 'email':
      regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isMail = regex.test(value);
      if (!isMail) {
        return 'Please, provide correct email address';
      };
      return null;

    case 'password':
      regex = /^([a-zA-Z0-9@*#]{8,15})$/;
      const isPassword = regex.test(value);
      if (!isPassword) {
        return ' Password must consists of at least 8 characters and not more than 15 characters.'
      };
      return null;

    case 'confirm':
      if (value !==confirmValue) {
        return 'Passwords are differents';
      };
      return null;
  };
};