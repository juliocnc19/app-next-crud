"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

export default function FormInsert() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="flex flex-col p-8 bg-zinc-50 shadow-2xl rounded w-full sm:w-1/2 md:w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h1 className=" mb-8 text-center text-gray-700 font-bold text-2xl">
            Acceso
          </h1>
          <div className="flex flex-col mb-10">
            <label className="mb-1 text-gray-600">Nombre de usuario</label>
            <input
              defaultValue=""
              {...register("user", {
                required: true,
                maxLength: 30,
                minLength: 3,
              })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2"
              required
              placeholder="Usuario"
            />
          </div>

          <div className="flex flex-col mb-12">
            <label className="mb-1 text-gray-600">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: true, min: 1 })}
              className="transition-all duration-200 hover:bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2 "
              required
              placeholder="Contraseña"
            />
          </div>

          <input
            type="submit"
            value="Ingresar"
            className="transition-all duration-200 bg-sky-200 hover:bg-sky-300 border border-gray-300 text-gray-600 text-sm rounded-lg outline-none p-2 font-bold cursor-pointer"
          />

          <div className="flex justify-between mt-6">
            <p>¿No tienes cuenta?</p>
            <Link href="/register"><span className="text-blue-600">Regístrate</span></Link>
          </div>
        </form>
      </div>
    </>
  );
}
