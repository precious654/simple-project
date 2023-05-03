import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

function Form() {

    const{ register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      
      console.log(data)

      swal(
        {
          title: 'Welcome!!!',
          text: 'You have sucessfully logged In',
          icon: 'success',
        }
      )

    }; 

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center'}} onSubmit={handleSubmit(onSubmit)}>
      <input type='text' { ...register("firstname", { required: true})} />
      {errors.firstname &&  <span>Please input your Firstname</span>}

      <input type='number' { ...register("age", {min: 18, max: 35,}) } />
      {errors.age?.type === 'max' &&  <span> You are too old for this site</span>}
      {errors.age?.type === 'min' &&  <span> You are too young for this site</span>}

      <input type='password' { ...register("password", { required: true, maxLength: 10})}/>
      <input type='text' { ...register("lastname", {pattern: /^[A-Za-z]+$/}) } />
      <input type='number' { ...register("test", {validate: (value) => value < 12 }) } />
      <button>Submit</button>
    </form>
  )
}

export default Form;
