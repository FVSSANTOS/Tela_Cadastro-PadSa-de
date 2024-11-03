'use client'

import styles from '../styles/Cadastro.module.css';
import { Template } from '@/components/Template';
import { useFormik } from 'formik';

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
                        <input className={styles.inputformulario} id='login' type="text" placeholder='Login'/>
                        <label className={styles.label}>Digite seu login</label>
                    </div>

                    <div className={styles.containerinput}>
                        <input className={styles.inputformulario} id='senha' type="password" placeholder='Senha' />
                        <label className={styles.label}>Digite sua senha</label>
                    </div>
                    
                    
                    <div className={styles.containerinput}>
                        <div className={styles.containerimagem}>
                            <div className={styles.imagem}>
                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd"></path>
                                </svg>

                                <div>
                                    <label  className={styles.labelimagem}>
                                        <span>Clique para adicionar uma foto</span>
                                        <input id='foto' type="file" className='sr-only' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={styles.botao} type='submit'>Cadastrar</button>
                </form>
            </section>
        </Template>
  )
}
