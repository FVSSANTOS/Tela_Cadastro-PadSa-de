'use client'

import styles from '../styles/Cadastro.module.css';
import { Template } from '@/components/Template';
import { useFormik } from 'formik';
import Link from 'next/link';

interface FormProps {
    nome: string;
    email: string;
    login: string;
    senha: string;
    foto: any;
}

const formsScheme: FormProps = {nome:'', email:'', login:'', senha:'', foto:''}

export default function Cadastro() {

    const formik = useFormik<FormProps> ({
        initialValues: formsScheme,
        onSubmit: (dados: FormProps) => {
            console.log(dados)
        }
    })

  return (
        <Template>
            <h5 className={styles.tituloformulario}>Preencha os dados abaixo <br/> para fazer o <span>cadastro</span></h5>
            <section className={styles.containerformulario}>
                
                <form className={styles.formulario} onSubmit={formik.handleSubmit}>
                    <div className={styles.containerinput}>
                        <input  className={styles.inputformulario}id='nome' type='text' placeholder='Nome Completo' />
                        <label className={styles.label}>Digite seu nome completo</label>
                    </div>

                    <div className={styles.containerinput}>
                        <input className={styles.inputformulario} id='email' type="email" placeholder='E-mail' />
                        <label className={styles.label}>Digite seu e-mail</label>
                    </div>

                    <div className={styles.containerinput}>
                        <input className={styles.inputformulario} id='senha' type="password" placeholder='Senha' />
                        <label className={styles.label}>Digite sua senha</label>
                    </div>

                    <button className={styles.botao} type='submit'>Cadastrar</button>
                </form>

                <span className={styles.span}>Já possui uma conta? <Link rel="stylesheet" href="#" >Faça o login</Link></span>
            </section>
        </Template>
  )
}
