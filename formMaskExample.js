import React, {Component, useState } from "react";
import fire from '../../config/Fire';
import { mask, unMask } from 'remask';

import { useHistory } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { signIn } from '../../store/actions/authActions';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
const useStyles = makeStyles(styles);

export default function CadastroUsuario(props) {
  let history = useHistory();
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {setCardAnimation("");}, 700);
  
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginPasswordConfirmed, setloginPasswordConfirmed] = useState("");
  const [formName, setformName] = useState("");
  const [formCpf, setformCpf] = useState("");
  
  const [loginEmailState, setloginEmailState] = useState("");  
  const [loginPasswordState, setloginPasswordState] = useState("");
  const [loginPasswordConfirmedState, setloginPasswordConfirmedState] = useState("");
  const [formNameState, setformNameState] = useState("");
  const [formCpfState, setformCpfState] = useState("");
  
  //const inputClasses = classNames({ [classes.input]: true, [classes.whiteInput]: white });

  //  const { inputRef, ...other } = props;

  /* REGEX - Para validar CPF/CNPJ 
    CPF:/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/   
    CNPJ:/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
    AMBOS:/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
  */

  const verifyCpf = value => {
    var cpfRex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (cpfRex.test(value)) {
      return true;
    }
    return false;        
  };

  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyLength = (value, length) => {
    if (value.length >= length) {      
      return true;
    }    
    return false;
  };
      
    function handleSubmit(e){
      e.preventDefault();
      
      if (formNameState === "") setformNameState("error");       
      if (formCpfState === "") setformCpfState("error");
      if (loginEmailState === "") setloginEmailState("error");              
      if (loginPasswordState === "") setloginPasswordState("error");
      if (loginPasswordConfirmedState === "") setloginPasswordConfirmedState("error");      
      if (loginPasswordConfirmedState !== loginPasswordState) setloginPasswordConfirmedState("error");       
      
      console.log(`Estado do nome: ${formNameState}`);
      console.log(`Estado do CPF: ${formCpfState}`);
      console.log(`Estado do login: ${loginEmailState}`);
      console.log(`Estado do SENHA: ${loginPasswordState}`);
      console.log(`Estado do CONF SENHA: ${loginPasswordConfirmedState}`);


      if((formNameState==='success')
        &&(formCpfState==='success')
        &&(loginEmailState==='success')
        &&(loginPasswordState==='success')
        &&(loginPasswordConfirmedState==='success')){
          console.log('Vai enviar!');
          console.log(formName);
          console.log(formCpf);
          console.log(loginEmail);
          console.log(loginPassword);
          console.log(loginPasswordConfirmed);
      }else{
        console.log('Não vai enviar.');
      }                                    
      //  history.push('/admin/dashboard')        
    }
  
//    console.log(mask('00000000000', ['999.999.999-99']));
    
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form onSubmit={handleSubmit}>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader className={`${classes.cardHeader} ${classes.textCenter}`} color="info">
                <Icon fontSize="large">account_circle</Icon>                
                <h4 className={classes.cardTitle}>Cadastro de Usuário</h4>                
              </CardHeader>
              <CardBody>         
              
                <CustomInput
                  success={formNameState === "info"}
                  error={formNameState === "error"}
                  required
                  labelText="Nome"                
                  id="formName"                  
                  formControlProps={{fullWidth: true}}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>face</Icon>
                      </InputAdornment>
                    ),
                    onChange: event => {
                      // Minimo 1, maximo 20 caracteres
                      if( (verifyLength(event.target.value, 1))&& (!verifyLength(event.target.value, 21)) ){
                        setformNameState("success");                        
                      } else {
                        setformNameState("error");
                        
                      }                      
                      setformName(event.target.value);
                    },
                    type: "text",                                      
                  }}
                />

                <CustomInput
                  success={formCpfState === "info"}
                  error={formCpfState === "error"}
                  labelText="CPF"                
                  id="formCpf"                  
                  formControlProps={{fullWidth: true}}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>money</Icon>                        
                      </InputAdornment>
                    ),        
                    value: formCpf,                                
                    onChange: event => {
                      const originalValue = event.target.value;
                      const maskedValue = mask(originalValue, [
                        '999.999.999-99'
                      ]);
                      console.log(`ori: ${originalValue}`);
                      console.log(`masc: ${maskedValue}`);
                      setformCpf(maskedValue);                    

                      if (verifyCpf(maskedValue)) {
                        setformCpfState("success");
                      } else {
                        setformCpfState("error");
                      }
                    },                
                    type: "text",                                      
                  }}
                  
                /> 
                                
                <CustomInput
                  success={loginEmailState === "info"}
                  error={loginEmailState === "error"}
                  labelText="E-mail"
                  id="loginemail"
                  formControlProps={{fullWidth: true}}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    onChange: event => {
                      if (verifyEmail(event.target.value)) {
                        setloginEmailState("success");                        
                      } else {
                        setloginEmailState("error");                        
                      }
                      setloginEmail(event.target.value);
                    },
                    type: "email"
                  }}
                />

              <CustomInput
                success={loginPasswordState === "info"}
                error={loginPasswordState === "error"}
                labelText="Informe a senha"                
                id="loginpassword"
                formControlProps={{fullWidth: true}}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                    </InputAdornment>
                  ),
                  onChange: event => {
                    if (verifyLength(event.target.value, 8)) {
                      setloginPasswordState("success");
                    } else {
                      setloginPasswordState("error");
                    }
                    setloginPassword(event.target.value);
                  },
                  type: "password",
                  autoComplete: "off"
                }}
              />                

              <CustomInput
                success={loginPasswordConfirmedState === "info"}
                error={loginPasswordConfirmedState === "error"}
                labelText="Confirme a senha"                
                id="loginpasswordconfirmed"
                formControlProps={{fullWidth: true}}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                    </InputAdornment>
                  ),
                  onChange: event => {
                    if (loginPassword === event.target.value) {
                      setloginPasswordConfirmedState("success");
                    } else {
                      setloginPasswordConfirmedState("error");
                    }
                    setloginPasswordConfirmed(event.target.value);
                  },
                  type: "password",
                  autoComplete: "off"
                }}
              />                
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button type="submit" color="primary" fullWidth>Criar</Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
