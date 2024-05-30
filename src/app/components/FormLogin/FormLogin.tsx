"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  email: string;
  senha: string;
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const router = useRouter();
  const redireciona = () => {
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(redireciona)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-control form-control-lg"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {errors.email?.type === "required" && (
          <span className="text-danger fw-medium"> Email é obrigatorio</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-danger fw-medium"> Email invalido</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="senha" className="form-label">
          Senha
        </label>
        <input
          className="form-control form-control-lg"
          type="password"
          id="senha"
          {...register("senha", { minLength: 6, required: true })}
        />
        {errors.senha?.type === "required" && (
          <span className="text-danger fw-medium"> Senha é obrigatória</span>
        )}

        {errors.senha?.type === "minLength" && (
          <span className="text-danger fw-medium">
            {" "}
            Minímo de 6 (seis) caracteres{" "}
          </span>
        )}
      </div>

      <div className="d-grid col-12">
        <button type="submit" className="btn btn-success">
          Entrar
        </button>
      </div>

      <div className="text-center mt-3">
        <Link href="/cadastro" className="btn btn-link">
          {" "}
          não tenho cadastro{" "}
        </Link>
      </div>
    </form>
  );
}
