import { useForm } from "react-hook-form";
import { useState } from "react";
import "./example.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== "password") {
      setPasswordError(true);
      alert(`Your password ${data.password} is invalid`);
    } else {
      setPasswordError(false);
      console.log(data);
      alert(`${data.firstName} is logged in!`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <fieldset>
      <legend><h3>Question 2</h3></legend>
      
      <label className="hook__text">First Name</label>
      <input
        type="text"
        className="hook__input"
        {...register("firstName", { required: true})}
      />
      
      {errors.firstName &&(<p className="hook__error">First name is required</p>)}

      <label className="hook__text">Last Name</label>
      <input
        type="text"
        className="hook__input"
        {...register("lastName", { required: true})}
      />
      {errors.lastName && (
        <p className="hook__error">Last Name is required</p>
      )}

<label className="hook__text">Username</label>
      <input
        type="text"
        className="hook__input"
        {...register("username", { required: true})}
      />
      {errors.username && (
        <p className="hook__error">Username is required </p>
      )}

      <label className="hook__text">Email</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
      )}

      <label className="hook__text">Password</label>
      <input
        type="password"
        className="hook__input"
        {...register("password", { required: true })}
      />
      {errors.password && <p>Password is required!</p>}
      

      <button className="hook__button" type="submit">
        Submit
      </button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
