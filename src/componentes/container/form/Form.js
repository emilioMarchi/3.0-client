import React, {useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios'

const Form = () => {
    
    const [formInfo, setFormInfo] = useState()
    const [formResponse, setFormResponse] = useState()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values, {resetForm}) => {
      try{
        setFormInfo(values)
        await axios({
          method: 'POST',
          url:'http://localhost:8081/form',
          data: values
        }).then((res)=>{
          setFormResponse(res.data.state)
          setFormInfo(values)
          resetForm()
        })
      } catch{
        console.error('error')
      }
    }
  });

  return (
    <form className='form-contact' onSubmit={formik.handleSubmit}>
      <div className='form-level'>
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className='form-level'>
        <label htmlFor="lastName">Localidad</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className='form-level'>
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button className='form-button' type="submit">Enviar</button>
    </form>
  );
};

export default Form