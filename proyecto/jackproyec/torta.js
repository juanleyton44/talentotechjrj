// Agregar un bloque try-catch para manejar errores al cargar datos
async function cargarDatos() {
    try {
        return new Promise((resolve, reject) => {
            Papa.parse('01 renewable-share-energy.csv', {
                header: true,
                download: true,
                complete: (result) => {
                    resolve(result.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

// Agregar un bloque try-catch para manejar errores al crear gráficos
async function crearGraficos() {
    try {
        const datos = await cargarDatos();

        // Filtrar datos para el gráfico de torta (solo para el año 1977)
        const datos1977 = datos.find(d => d.Year === '1977');
        const porcentajeRenovables = parseFloat(datos1977['Renewables (% equivalent primary energy)']);

        // Procesar los datos para los gráficos
        const etiquetas = datos.map(d => d.Year);
        const valores = datos.map(d => parseFloat(d['Renewables (% equivalent primary energy)']));

        // Gráfico de Torta (Pastel)
        const ctxTorta = document.getElementById('graficoTorta').getContext('2d');
        new Chart(ctxTorta, {
            type: 'pie',
            data: {
                labels: ['Energía Renovable', 'Energía No Renovable'],
                datasets: [{
                    label: 'Distribución de Energías en 1977',
                    data: [porcentajeRenovables, 100 - porcentajeRenovables],
                    backgroundColor: ['#4CAF50', '#FF5722'],
                    borderColor: '#fff',
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        }
                    }
                }
            }
        })
    }catch (error) {
            console.error('Error al crear los gráficos:', error);
    }
}
// Verificar si los elementos del DOM están cargados antes de intentar crear los gráficos
document.addEventListener('DOMContentLoaded', function() {
    crearGraficos();
});