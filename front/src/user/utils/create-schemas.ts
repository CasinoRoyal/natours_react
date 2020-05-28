import { validator, ValidatorType } from '../../shareable/utils/form-validator';

export type StateSchemaType = {
  email: string;
  password: string;
  username?: string;
  passwordConfirm?: string;  
};

export type ValidateSchemaType = {
  email: {
    required: boolean,
    error: string,
    validator: ValidatorType
  },
  password: {
    required: boolean,
    error: string,
    validator: ValidatorType
  },
  username?: {
    required: boolean,
    error: string,
    validator: ValidatorType
  },
  passwordConfirm?: {
    required: boolean,
    error: string,
    validator: ValidatorType
  }
};

export type SchemasType = StateSchemaType | ValidateSchemaType;


function _generate<T extends SchemasType>(schema: T): T {
  delete schema.username;
  delete schema.passwordConfirm;
  return schema;
}


export function createStateSchema(isSignup: boolean) {
  let stateSchema: StateSchemaType = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  if (!isSignup) {
    stateSchema = _generate<StateSchemaType>(stateSchema);
  }

  return stateSchema;
};

export function createValidateSchema(isSignup: boolean) {
  let validateSchema: ValidateSchemaType = {
    username: {
      required: true,
      error: 'Please, provide your username',
      validator
    },
    email: {
      required: true,
      error: 'Please, provide your email',
      validator
    },
    password: {
      required: true,
      error: 'Password is required',
      validator
    },
    passwordConfirm: {
      required: true,
      error: 'Confirm password is required',
      validator
    }
  };

  if (!isSignup) {
    validateSchema = _generate<ValidateSchemaType>(validateSchema);
  }

  return validateSchema;
};