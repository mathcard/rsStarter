import React, { useState, useEffect } from 'react';
import { makeStyles, /*useTheme*/ } from '@material-ui/core/styles';
import fire from '../config/Fire';

import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({    
  container: {                
    display: 'flex',        
  },  
  fields:{
    width: '100%',
    
    border : '1px solid red',
    padding: theme.spacing(3),   
  }, 
  row:{
    //minWidth: '600px',
    marginLeft: '60px',
    //background: '#c1c',
  }
}));

export default function Home() {  
  //const theme = useTheme();
  const classes = useStyles();
  let history = useHistory();
        
  const [formIndex, setFormIndex] = useState("");
  const [formField, setFormField] = useState("");
  const [formValue, setFormValue] = useState("");
  
  const [confAddress, setConfAddress] = useState("");
  const [confTime, setConfTime] = useState("");
  const [confToken, setConfToken] = useState("");  
  
  const [status, setStatus] = React.useState({checkedA: true, checkedB: false});
  const [newStatus, setNewStatus] = React.useState({checkedNewA: true}, {checkedNewB: false});
  const [fieldDataTable, setFieldDataTable] = useState("");  
  const [newData, setNewData] = useState('');
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {    
    findFields();    
  }, [newData]); 

  const handleChangeStatus = (event) => {
    setStatus({ ...status, [event.target.name]: event.target.checked });
  };
  
  const handleChangeStatus2 = (event) => {
    setNewStatus({ ...newStatus, [event.target.name]: event.target.checked });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if ((formIndex === "") || (formField === "") || (formValue === "")){
      alert("Informe os dados");
    }else{
      console.log(`Index: ${formIndex}`);
      console.log(`Field: ${formField}`);
      console.log(`Value: ${formValue}`);
      console.log(status.checkedA)
        
      fire.firestore().collection("filedsQuery").add({
        index: formIndex,
        field : formField,
        value: formValue,       
        status: status.checkedA,   
      }).then(function(docRef) {
        console.log("Collection ID: ", docRef.id);       
        setNewData(true);         
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });

      }     
    }

    function findFields(){
      const fieldData = [];    
      fire.firestore().collection('filedsQuery')
        .get()      
        .then(function(querySnapshot) {        
          querySnapshot.forEach(function(doc) {            
            const { index, field, value, status } = doc.data();              
            console.log(doc.id);
            fieldData.push({id: doc.id, index, field, value, status });    
          })      
          console.log(fieldData);
          setFieldDataTable(fieldData);     
          setShowTable(true);     
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);        
        });
    }  
    
    function handleEditStatus(dados, status){            
      const {id} = dados;
                  
      fire.firestore().collection('filedsQuery').doc(id).set({
        index: dados.index,
        field : dados.field,
        value: dados.value,       
        status: status,      
      }); 
        
      var aux = Math.random();      
      setNewData(aux);      
    }

    function handleConfig(e){
      console.log(confAddress);
      console.log(confTime);
      console.log(confToken);
      console.log(status.checkedB);

      localStorage.setItem("address", confAddress);
      localStorage.setItem("time", confTime);
      localStorage.setItem("token", confToken);
      if(status.checkedB){
        localStorage.setItem("log", true);
      }      
    }
  
  return(           
    <>
      
  <Typography align="center" component="h1" variant="h6">Elast Alert</Typography>    
            
  <div className={classes.container}>   
    <div className={classes.fields}>
      {/*<Grid container spacing={1} > */ }
      <Grid container item xs={12} spacing={5} className={classes.row}>
        <form onSubmit={handleSubmit}>
      <Grid item xs={12}  >
        <TextField
          variant="outlined"
          required fullWidth
          id="index" label="Index"
          name="index" color="secondary"
          value={formIndex}
          onChange={e => setFormIndex(e.target.value)}
        />
      </Grid>
              
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required fullWidth
          id="field" label="Field"
          name="field" color="secondary"
          value={formField}
          onChange={e => setFormField(e.target.value)}
        />
      </Grid>
              
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="value"
          label="Value"                  
          id="value"                  
          color="secondary"
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
        />
        </Grid>             

        <Grid item xs={12}>
        <Switch
        checked={status.checkedA}
        onChange={handleChangeStatus}
        name="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </Grid>
        
        
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"        
      >Enviar</Button>   
      
      </form>
      </Grid>
     {/*</Grid>      */}
    </div>
    
    <div className={classes.fields}>
    <Grid container item xs={12} spacing={1} className={classes.row}>
      <Grid item xs={12}  >
        <TextField
          variant="outlined"
          required fullWidth
          id="address" label="Address"
          name="address" color="secondary"
          value={confAddress}
          onChange={e => setConfAddress(e.target.value)}
        />
      </Grid>
              
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required fullWidth
          id="time" label="Time Refresh"
          name="time" color="secondary"
          value={confTime}
          onChange={e => setConfTime(e.target.value)}
        />
      </Grid>
              
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="token"
          label="BOT TOKEN"                  
          id="token"                  
          color="secondary"
          value={confToken}
          onChange={e => setConfToken(e.target.value)}
        />
        </Grid>             

        <Grid item xs={12}>
        <Switch
        checked={status.checkedB}
        onChange={handleChangeStatus}
        name="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Enable Log
      </Grid>
        
        
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="secondary"   
        onClick={handleConfig}     
      >Salvar</Button>   
      </Grid>
      </div>

     </div>

     <div>
      
          {showTable ?
      
                <Grid item xs={12}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>                      
                      <TableCell align="center">Index</TableCell>
                      <TableCell align="center">Field</TableCell>
                      <TableCell align="center">Value</TableCell>                      
                      <TableCell align="center">Status</TableCell>                                                            
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fieldDataTable.map((row) => (                      
                      <TableRow key={row.id}>                        
                        <TableCell align="center">{row.index}</TableCell>
                        <TableCell align="center">{row.field}</TableCell>
                        <TableCell align="center">{row.value}</TableCell>                                                   
                        <TableCell align="center">
                        {row.status ?                                                                 
                          <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="primary"    
                          onClick={()=>{handleEditStatus(row, false)}}    
                        >ON</Button>   
                        :
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="secondary"   
                          onClick={()=>{handleEditStatus(row, true)}}     
                        >OFF</Button>   
                          
                          /*<Switch
                          checked={newStatus.checkedNewA}
                          onChange={handleChangeStatus2}
                          onClick={()=>{handleEditStatus(row, 1)}}
                          name="checkedNewA"
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />               
                        : <Switch
                          checked={newStatus.checkedNewB}
                          onChange={handleChangeStatus2}
                          onClick={()=>{handleEditStatus(row, 0)}}
                          name="checkedNewB"
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />            */  }             
                    </TableCell>                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>                
                </Grid>            
                : <span></span> }
                
                </div>    
    </>    
  )
}