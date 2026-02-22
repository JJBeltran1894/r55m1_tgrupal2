let cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("cmpDatosCuenta");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let elementoCuenta;
    let cuenta;
    for (i=0;i<cuentas.length;i++){
        elementoCuenta=cuentas[i];
        if(numeroCuenta==elementoCuenta.numeroCuenta){
            cuenta=elementoCuenta;
        }
    }
    return cuenta;
}

ejecutarBusqueda=function(){
    //toma el numero de cuenta de la caja de texto
    let cuentaBuscada=recuperarTexto("txtCuentaBusqueda");
    //invoca a buscarCuenta y guarda el resultado en una variable
    let cuenta=buscarCuenta(cuentaBuscada);
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    if(cuenta!=null){
        mostrarTexto("etqNumeroCuenta",cuenta.numeroCuenta);
        mostrarTexto("etqCedula",cuenta.cedula);
        mostrarTexto("etqNombre",cuenta.nombre+" "+cuenta.apellido);
        mostrarTexto("etqSaldo",cuenta.saldo);
        mostrarComponente("cmpDatosCuenta");
        habilitarComponente("btnDepositar");
        habilitarComponente("btnRetirar");
    }else{
        alert("Cuenta Inexistente");
    } 
}

depositar=function(numeroCuenta,monto){
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    let cuentaAfectada=buscarCuenta(numeroCuenta);

    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    cuentaAfectada.saldo+=monto;
    return cuentaAfectada.saldo
}

ejecutarDeposito=function(){
    //Toma el numero de cuenta ingresado en la caja de texto
    let cuenta=recuperarTexto("etqNumeroCuenta");
    //Toma el monto ingresado en la caja de texto
    let monto=recuperarTexto("txtMonto");
    //invoca a depositar
    let nuevoSaldo=depositar(cuenta,monto);
    //Muestra un mensaje TRANSACCION EXITOSA
    alert("Transaccion Exitosa")
    //Muestra en pantalla el nuevo saldo de la cuenta
    mostrarTexto("etqSaldo",nuevoSaldo);
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}