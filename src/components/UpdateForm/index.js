import React from "react";
import { useForm } from "react-hook-form";
import './styles.css'
import { firebase } from '../../firebase'

export default function UpdateForm({item}) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const db = firebase.firestore();  
  const onSubmit = async (data) => {
    const {name, age, color } = data
    await db.collection("cats").doc(item.id).update({
      name,
      age,
      color,
      src: item.src,
    });
    window.location.reload(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label>name</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Te falta el nombre</span>}
      </div>
      <div className="form-row">
        <label>age</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          {...register("age", { required: true })}
        />
        {errors.name && <span>Te falta la edad</span>}
      </div>
      <div className="form-row">
        <label>color</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          {...register("color", { required: true })}
        />
        {errors.name && <span>Te falta el color</span>}
      </div>

      <div className="form-row">
        <button type="reset">Reset</button>
        <button type="submit">Update gato</button>
      </div>
    </form>
  );
}