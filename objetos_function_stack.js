var saludar = (function(nombre){
  var mensaje = ''
    console.log('********************')
    if (arguments.length == 1) {
      console.log('Buenos días, ' +' '+ nombre)
    } else {
      //Si son dos o mas argumentos, quiero que nombre los salude uno por uno
      console.log(nombre +' '+ 'dice:')
      for (let i = 1; i < arguments.length; i++) {
       var mensaje = 'Hola' +' '+ arguments[i]  
       
       console.log(mensaje)
      }
    }
    console.log('********************')
    
})
saludar('alice', 'bob', 'david')