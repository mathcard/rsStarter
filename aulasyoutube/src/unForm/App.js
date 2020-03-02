import React, { useRef } from 'react';
import {Form} from '@unform/web';
import {Scope} from '@unform/core';
import * as Yup from 'yup';
import Input from './components/Form/Input';

const initialData = { 
    email: 'mathcardoso.94@gmail.com',
    address:{
        city: 'Goiania',
    }
}

function App(){    
    const formRef = useRef(null);

    async function handleSubmit(data, {reset}){
        // VALIDACAO COM YUP
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('O e-mail é obrigatório'),
                address: Yup.object().shape({
                    city: Yup.string()
                        .min(3, 'No mínio 3 caracteres')
                        .required('A cidade é obrigatória'),
                })
            });

            await schema.validate(data, {
                abortEarly: false,
            })
        console.log(data);
        reset();
        } catch(err){
            if(err instanceof Yup.ValidationError){
                console.log(err);
            }
        }                
    }    
    
    // VALIDACAO TRADICIONAL
    // if(data.name == ''){ alert('Nome está vazio!') }
                
    // VALIDACAO UNFORM
    /*if(data.name == ''){
        //formRef.current.setFieldError('name', 'O nome é obrigatório!'); ERRO EM UM CAMPO
        formRef.current.setErros({
            name: 'O nome é obrigatório',
            address:{
                city: 'A cidade é obrigatória',
            }
        });
    } */

    return(
        <div className="App">
            <h1>Hello World</h1>
            
            <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
                <Input name="name"/>
                <Input type="email" name="email"/>
                <Scope path="address">
                    <Input name="street" />
                    <Input name="number" />
                    <Input name="neighborhood" />
                    <Input name="city" />                    
                </Scope>
                <Input type="password" name="password"/>
                <button type="submit">Enviar</button>
            </Form>
        </div>
    );
}

export default App;