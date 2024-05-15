"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  nome: string;
  email: string;
  confirmaEmail: string;
  senha: string;
}

export default function FormCadastro() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const router = useRouter();
  const redireciona = () => {
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(redireciona)}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="nome"
          arial-descibedby="nome"
          {...register("nome", { required: true })}
        />

        {errors.nome?.type === "required" && (
          <span className="text-danger fw-medium"> Nome é obrigatorio</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-control form-control-lg"
          id="email"
          arial-describedby="email"
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
        <label htmlFor="confirmarEmail" className="form-label">
          Confirmar email
        </label>
        <input
          className="form-control form-control-lg"
          id="confirmaEmail"
          aria-describedby="confirmarEmail"
          {...register("confirmaEmail", {
            required: true,
            validate: (confEmail) => {
              if (watch("email") != confEmail) {
                return "os Emails não coencidem";
              }
            }
          })}
        />
        {errors.confirmaEmail?.type === "required" && (
          <span className="text-danger fw-medium">
            {" "}
            É obrigatorio confirmar email
          </span>
        )}

        {errors.confirmaEmail?.message && (
          <span className="text-danger fw-medium">
            {" "}
            {errors.confirmaEmail?.message}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="senha" className="form-label">
          Senha
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="senha"
          {...register("senha", { required: true, minLength: 6 })}
        />
        {errors.senha?.type === "required" && (
          <span className="text-danger fw-medium"> Senha é obrigatória</span>
        )}
        {errors.senha?.type === "minLength" && (
          <span className="text-danger fw-medium">
            {" "}
            Minimo de caracteres para senha é 6 (seis)
          </span>
        )}
      </div>

      <div className="d-grid col-12">
        <button type="submit" className="btn btn-success">
          Confirmar cadastro{" "}
        </button>
      </div>

      <div className="text-center mt-3">
        <Link href="/login" className="btn btn-link">
          já possuo cadastro
        </Link>
      </div>
    </form>
  );
}
