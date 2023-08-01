let salir = "no";
let empleados = [];



class Empleado {
    constructor(nombre, puesto, horas, sueldo_hora,) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.horas = horas;
        this.sueldo_hora = sueldo_hora;
        this.sueldo = this.calcularSueldo();
        this.jerarquia = this.jerarquia(puesto)
    }

    calcularSueldo() {
        return this.sueldo_hora * this.horas;
    }
    jerarquia(puesto){
        if(puesto === "gerente"){
                return  1
        }
        else if(puesto === "encargado"){
            return 2 
        }
        else if(puesto === "bartender"){
            return 3
        }
        else if(puesto === "cocina"){
            return 4
        }
        else{
            return 5
        }
        }

    }


alert("EMPLEADOS DEL DIA")
alert("El PROGRAMA TE PIDE NOMBRE Y LAS HORAS TRABAJADAS DE LOS EMPLEADOS DE UN BAR")
alert("AL FINAL TE MUESTRA LOS EMPLEADOS ORDENADOS POR JERARQUIA, LAS HORAS QUE TRABAJARON Y CUANTO GANARON")
alert("TAMBIEN LOS GASTO PARA PAGARLES A TODOS LOS EMPLEADOS Y LA PROPINA QUE SOLO LA GANAN LOS MOZOS Y BARTENDERS")
do {
    let nombre = prompt("Ingrese el nombre de un empleado:");
    let puesto = prompt("Ingrese el puesto del empleado(mozo/cocina/bartender/encargado):").toLowerCase();
    do{    
        if(puesto === "mozo"){
            sueldo_hora = 400
        }
        else if(puesto === "bartender"){
            sueldo_hora = 500
        }
        else if(puesto === "cocina") {
            sueldo_hora = 450 
        }
        else if(puesto === "encargado"){
            sueldo_hora = 800
        }else{
        puesto = prompt("Ingrese el puesto de un empleado(mozo/cocina/bartender/encargado):")
        }
    }while(puesto !== "mozo" & puesto !== "bartender" & puesto !== "cocina" & puesto !== "encargado")
    
    let horas = Number(prompt("Ingrese las horas trabajadas en esta jornada:"));
    salir = prompt("Desea cargar otro empleado (si/no):").toLowerCase();
    const emp1 = new Empleado(nombre, puesto, horas, sueldo_hora);
    
    empleados.push(emp1);
} while (salir !== "no");


let gerente = prompt("Fue el gerente(si/no):").toLowerCase()
if(gerente === "si"){
    nombre = prompt("Ingrese el nombre del gerente:");
    puesto = "gerente"
    horas = Number(prompt("Ingrese las horas trabajadas en esta jornada:"));
    sueldo_hora = 1000
    const gere = new Empleado(nombre,puesto,horas,sueldo_hora);
    empleados.push(gere);
}


const mozo_bartender = empleados.filter((el) => el.puesto === "mozo" || el.puesto ==="bartender");
let propina = 0
if (mozo_bartender.length<5){
    propina_total = Math.round(Math.random() * 3000)
}else{
    propina_total = Math.round(Math.random() * 8000)
}
let propina_por_empleado = Math.round(propina_total / mozo_bartender.length)
mozo_bartender.forEach((emp) =>{
    emp.sueldo += propina_por_empleado 
})

let gastos = empleados.reduce((acumulador, empleados) => acumulador + empleados.sueldo,0)
gastos -= propina_total

empleados.sort((a,b) => a.jerarquia - b.jerarquia)

let listaEmpleados = ""
for (let index = 0; index < empleados.length; index++) {
    const empleado = empleados[index];
    listaEmpleados += `${empleado.nombre.toUpperCase()} - ${empleado.puesto.toUpperCase()} - HORAS: ${empleado.horas} - SUELDO: $${empleado.sueldo}\n`;
    }
alert("LOS EMPLEADOS DEL DIA SON: \n"+ listaEmpleados);
alert("SE GASTO EN TOTAL PARA PAGARLE A LOS EMPLEADOS: $"+ gastos + "\n LA PROPINA DEL DIA FUE DE: $"+ propina_total)


