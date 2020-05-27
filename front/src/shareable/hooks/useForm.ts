import { 
 useState, 
 useCallback, 
 useEffect, 
 ChangeEventHandler,
 FormEventHandler
} from 'react';

type ExtendsType = {[key: string]: any};
type CallbackType = () => void;

export function useForm<S extends ExtendsType, V extends ExtendsType, C extends CallbackType>(
  initialState: S, 
  validationScheme: V,
  callback: C 
) {

  const [form, setForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState({error: false, text: ''});

  // Add debounce on form! 

  const _validate = useCallback(
    () => {
      const hasError = Object.keys(validationScheme).some((key) => {
        const isRequired = validationScheme[key].required;
        
        if (isRequired && !form[key]) {
          return validationScheme[key].error;
        };

        return false;
      });

      return hasError;
    },
  [form, validationScheme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const  { name, value, type, id } = event.target;
      const validatorOptions = [value, type]

      if (id ==='confirm') {
        validatorOptions[1] = 'confirm';
        validatorOptions.push(form.password);
      };

      try {
        const isError: string | null = validationScheme[name].validator(...validatorOptions);
        if (isError) return setErrorForm({error: true, text: isError});

      } catch(err) {
        console.error(err);
        return;
      }

      setErrorForm({error: false, text: ''});
      setForm((prevState: typeof form) => ({
        ...prevState,
        [name]: value
      }));
    },

  [form, validationScheme]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      //validate
      const isValidForm = _validate();
      
      if (errorForm || isValidForm) {

      }

      callback();
    }, 

  [errorForm, _validate, callback]);

  return {
    form,
    handleChange,
    handleSubmit,
    errorForm
  };

};