import React from "react";
// TODO: import useFormik from formik library
import './App.css';
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = 'required';
      if(!values.email) errors.email = 'required';
      if(!values.password) errors.password = 'required';
      return errors;

    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} 
        value={formik.values.name}></input>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} 
        value={formik.values.email}></input>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}  
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} 
        value={formik.values.password}></input>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type="submit">Submit</button>

      </form>
     
    </div>
  );
}

export default App;
