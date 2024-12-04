async function cargaCSV() {
    try{
        const respuesta = await fetch("./hydropower-consumption.csv");//cargar el archivo
        const texto = await respuesta.text();//leer el contenido como texto

        const lineas = texto.split("\n");//dividir el contenido por lineas 
        const encabezados = lineas[0].split(","); //obtener los encabezados
        const cuerpo = lineas.slice(1); //obtener las filas de datos

        const tbody = document.querySelector("#tablaUsuarios tbody");


        // recorrer cada linea de datos
        cuerpo.forEach((linea)=>{
            const columnas = linea.split(","); //dividir las columans por coma
            // verificar que la linea tenga el numero correcto de columnas
            if  (columnas.length === encabezados.length) {
                const fila = document.createElement("tr");

                //crear celdas para cada columna
                columnas.forEach((dato)=>{
                    const celda = document.createElement("td");
                    celda.textContent = dato.trim();
                    fila.appendChild(celda);
                });

                tbody.appendChild(fila);//añadir la fila al cuerpo de la tabla
            }
        });
    } catch (error) {
        console.error("Error al cargar el archivo CSV:", error);
    }
    
    
}
//llamr a la funcion para cargar el CSV

cargaCSV();