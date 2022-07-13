// function hoisting 

 sayMyName()

 sayMyName = function() {
    console.log(`Gabriel`)
 }
 
 // foi declarada uma função de posição, ela sofre elevação desse jeito!
 
  sayMyName()
 
  const sayMyName = function() {
     console.log(`Gabriel`)
  }

  // já assim, não!
  // vai dar erro de referencia 
  // até mesmo com let, e var, pois é como se estivesse fazendo isso:

  /*
  
   ´var sayMyName´

    sayMyName() - expression error
 
    var sayMyName = function() {
        console.log(`Gabriel`)
    }
    
    sayMyName() - Existe
    
  
  
  */