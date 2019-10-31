//Declaración de variables
var nombreUsuario = 'Sara Samanta';
var saldoCuenta = 5000;
var limiteExtraccion = 2000;
var servicioAgua = 350;
var servicioTel = 425;
var servicioLuz = 210;
var servicioInt = 570;
var cuentaAmiga1 = '1234567';
var cuentaAmiga2 = '9876543';
var password = '1990';
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function iniciarSesion() {
    var codigo = prompt('Ingrese el código de cuenta');
    if (codigo == password) {
        alert('Bienvenido/a Sara Samanta.');
    } else {
        alert('Código de cuenta incorrecto. Se retendrá su dinero por cuestiones de seguridad');
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    
    }
}


    function sumarDinero(num) {
        saldoCuenta += num;
        console.log(saldoCuenta);
    }
    function sacarDinero(num) {
        saldoCuenta -= num;
        console.log(saldoCuenta);    
    }
    function pagoMiServicio(s) {
        var costo = s;
        saldoCuenta -= costo;
        console.log(saldoCuenta);
        
    }
    function cambiarLimiteDeExtraccion(num) {
        var num = parseInt(prompt('Ingrese nuevo limite de extracción'));
        if (num % 1 !==0){
            return alert('Acción cancelada. Intente nuevamente ingresando un número.');
        }else{
            // const valorNum = num || limiteExtraccion;
            limiteExtraccion = num /*valorNum*/;
            actualizarLimiteEnPantalla();
            alert('Límite de extracción actualizado.\nNuevo límite de extracción: $'+limiteExtraccion); 
            }
    }


    function extraerDinero() {
        var saldoCuentaViejo = saldoCuenta;
        var num = parseInt(prompt('Ingrese monto a retirar'));
        if (num > limiteExtraccion) {
            return alert('Acción no válida. Verifique el límite de extracción.')
        } else if (num > saldoCuenta) {
            return alert('Saldo insuficiente. Por favor, ingrese un monto más bajo.');
        } else if (num % 100 !==0){
            return alert('Solo puede extraer billetes de 100.');
        }else if (num < 0) {
            return alert('Para añadir dinero a su cuenta, seleccione DEPOSITAR DINERO.');
        } else {
            sacarDinero(num);
            actualizarSaldoEnPantalla();
            alert('Has retirado: $'+num+'\nSaldo anterior: $'+saldoCuentaViejo+'\nSaldo Actual: $'+saldoCuenta+'');
        }
    }    

    function depositarDinero() {
        var num = parseInt(prompt('Ingrese monto a depositar'));
        if (num % 1 !==0){
            return alert('Acción cancelada. Intente nuevamente ingresando un número.');
        }else{
            var saldoCuentaViejo = saldoCuenta;
            sumarDinero(num);
            actualizarSaldoEnPantalla();
            alert('Has depositado: $'+num+'\nSaldo anterior: $'+saldoCuentaViejo+'\nSaldo Actual: $'+saldoCuenta+''); 
        }
    }

    function pagarServicio() {
        var servicio = prompt('Ingrese el número que corresponda con el servicio que quiere pagar:\n 1 - Agua\n 2 - Luz\n 3 - Internet\n 4 - Teléfono')
        switch (servicio) {
            case '1':
                if (servicioAgua > saldoCuenta) {
                    return alert('El saldo es insuficiente para efectuar esta acción.');
                } else {
                    var saldoCuentaViejo = saldoCuenta;
                    pagoMiServicio(servicioAgua);
                    alert('Has pagado el servicio AGUA con éxito\nSaldo anterior: $'+saldoCuentaViejo+'\nDescontado: $'+(saldoCuentaViejo -= saldoCuenta)+'\nSaldo Actual: $'+saldoCuenta+'');  
                    actualizarSaldoEnPantalla();
                    break;
                }
            case '2':
                if (servicioLuz > saldoCuenta) {
                    return alert('El saldo es insuficiente para efectuar esta acción.');
                } else {
                    var saldoCuentaViejo = saldoCuenta;
                    pagoMiServicio(servicioLuz);
                    alert('Has pagado el servicio LUZ con éxito\nSaldo anterior: $'+saldoCuentaViejo+'\nDescontado: $'+(saldoCuentaViejo -= saldoCuenta)+'\nSaldo Actual: $'+saldoCuenta+'');  
                    actualizarSaldoEnPantalla();
                    break;
                }
            case '3':
                if (servicioInt > saldoCuenta) {
                    return alert('El saldo es insuficiente para efectuar esta acción.');
                } else {
                    var saldoCuentaViejo = saldoCuenta;
                    pagoMiServicio(servicioInt);
                    alert('Has pagado el servicio INTERNET con éxito\nSaldo anterior: $'+saldoCuentaViejo+'\nDescontado: $'+(saldoCuentaViejo -= saldoCuenta)+'\nSaldo Actual: $'+saldoCuenta+'');  
                    actualizarSaldoEnPantalla();
                    break;
                }
            case '4':
                if (servicioTel > saldoCuenta) {
                    return alert('El saldo es insuficiente para efectuar esta acción.');
                } else {
                    var saldoCuentaViejo = saldoCuenta;
                    pagoMiServicio(servicioTel);
                    alert('Has pagado el servicio TELÉFONO con éxito\nSaldo anterior: $'+saldoCuentaViejo+'\nDescontado: $'+(saldoCuentaViejo -= saldoCuenta)+'\nSaldo Actual: $'+saldoCuenta+'');  
                    actualizarSaldoEnPantalla();
                    break;
                }
            default:
                alert('El servicio seleccionado es inexistente.');
                break;
        }
    }

    function transferirDinero() {
        var cuanto = prompt('Ingrese el monto a transferir.');
        if (cuanto % 1 !==0){
            return alert('Acción cancelada. Intente nuevamente ingresando un número.');
        }else if (cuanto <= 0){
            return alert('No es posible hacer transferencias de $0')
        }else{
            if (cuanto > saldoCuenta) {
                return alert('Su saldo no dispone de el dinero suficiente para continuar la transferencia.');
            } else {
                var direccion = prompt('Ingrese el número de la cuenta amiga a la que desea transferir.');
                if (direccion == cuentaAmiga1 || direccion == cuentaAmiga2) {
                        saldoCuenta -= cuanto;
                        actualizarSaldoEnPantalla();
                        alert('Usted ha transferido: $'+cuanto+'\nCuenta destino: '+direccion);
                } else {
                    return alert('Solo puede transferir a cuentas amigas.');
                }
            }
        }
    }







//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}