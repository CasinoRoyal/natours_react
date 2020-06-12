import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const getNotify = (message: string) => toast(message);

export const Notify = () => {
  return <ToastContainer autoClose={5000} />
}