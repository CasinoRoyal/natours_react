import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ChangeDataType } from '../types';
import { updateUserDataAsync } from '../actions';
import { useFetchSubmit } from '../../auth/hooks/use-fecth-submit';
import { userDataSchema } from '../utils/schemas';
import { compare } from '../utils/compare';
import { useNotify } from '../../shareable/hooks/use-notify';

type ChangeUserPropsType = ChangeDataType & {photo: string};

export const ChangeUserData: FC<ChangeUserPropsType> = ({name, email, photo}) => {
  const [file, setFile] = useState<any>(photo);
  const [tempUrl, setTempUrl] = useState<any>('');
  const { fetch } = useFetchSubmit<ChangeDataType>(updateUserDataAsync);
  const { getErrorNotify } = useNotify();
  const { register, handleSubmit, errors, reset } = useForm<ChangeDataType>({
    defaultValues: {
      name: '',
      email: '',
      photo: ''
    },
    validationSchema: userDataSchema
  });
  
  const imgUrl = tempUrl ? tempUrl : `img/users/${file}`

  useEffect(() => {
    reset({name: name, email: email, photo: photo});
  }, [reset, name, email, photo])


  useEffect(() => {
    if (errors.name || errors.email) {
      getErrorNotify(errors)
    }
  }, [errors, getErrorNotify]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files) {
      reader.readAsDataURL(files[0]); 

      reader.onloadend = () => {
        if (typeof reader.result ==='string') {
          setTempUrl(reader.result);
        }
      }
      
      setFile(files[0]);
    }
  }

  const handlerUserDataSubmit = (newData: ChangeDataType): void => {
    const formData = new FormData();
    newData.photo = file;
    
    const comparedValues = { 
      name: name, 
      email: email,
      photo: photo
    };

    const isChange = compare<ChangeDataType>(newData, comparedValues);

    if (!isChange) {
      toast.error('data was not change');
      return;
    }

    formData.append('name', newData.name);
    formData.append('email', newData.email);
    formData.append('photo', newData.photo);
    console.log(formData.values());
    fetch(formData);
  }

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form 
        className="form form-user-data" 
        onSubmit={handleSubmit(handlerUserDataSubmit)}
      >
        <div className="form__group">
          <label htmlFor="name" className="form__label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form__input" 
            required 
            name='name'
            ref={register}
          />
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">Email address</label>
          <input 
            type="email" 
            id="email" 
            className="form__input" 
            required 
            name='email'
            ref={register}
          />
        </div>

        <div className="form__group form__photo-upload">
          <img src={imgUrl} alt="User" className="form__user-photo" />
          <input 
            className="form__upload" 
            type="file" 
            accept="image/*" 
            id="photo" 
            name="photo"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="photo">Choose new photo</label>
        </div>

        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            Save settings
          </button>
        </div>                           
      </form>
    </div>
  );
}
