import { useState } from "react";

export type LoginForm = {
  phone: string;
  password: string;
};

const initialForm = {
  phone: "",
  password: "",
};

export const useForm = ()=>{
  const [form,_setForm] = useState<LoginForm>(initialForm);
  const [formHint,setFormHint] = useState<LoginForm>(initialForm);

  const setForm = (key:Partial<keyof LoginForm>,value:string)=>{
    const newForm:LoginForm = {...form};
    newForm[key] = value;
    _setForm(newForm);
  };

  const checkForm = ()
}