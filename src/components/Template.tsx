import React, { Children } from "react";
import styles from "../app/styles/Cadastro.module.css"

interface TemplateProps {
    children: React.ReactNode;
}



export const Template: React.FC<TemplateProps> = ({children}) => {

    return (
   
        <Container>
            <Header/>
                {children}
        </Container>
            
            
    )
}

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>         
                <img src="/logo.jpg" alt="" />
        </header>
    )
}

export const Container: React.FC<TemplateProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}


