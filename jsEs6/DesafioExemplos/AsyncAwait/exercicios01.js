const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

 const umPorSegundo = async () => {  
  for(var x=1; x<10; x++){
    await delay();
    console.log(`${x}s`);
  }        
}

umPorSegundo();