import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yearTerm } from '../store/data';
import { Select } from './Input';

export default function FilterBatch() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({ mode: "all" });
  return (
    <form className="es-form">
      <div className="row align-items-center">
        <Select
          label={"Year-Term"}
          id={"attendance"}
          name={"year-term"}
          lists={yearTerm}
          register={register}
        />

        <div className="col">
          <Link
            to="#"
            className="es-form-btn btn btn-block bg-gradient text-white"
          >
            View
          </Link>
        </div>
        <div className="col"></div>
      </div>
    </form>
  );
}
