// Función para la gráfica de pastel
function cargarGraficoPastel() {
    const ctx = document.getElementById("grafico");
    if (ctx) {
      new Chart(ctx.getContext('2d'), {
        type: "pie",
        data: {
          labels: ["Solar", "Eólica", "Hidráulica", "Total Energías Limpias"],
          datasets: [{
            data: [0.32,0.07,71,33],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#007BFF"]
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
  
  
  // Función para la gráfica de área
  function cargarGraficoArea() {
    const ctx = document.getElementById("areaChart");
    if (ctx && !ctx.classList.contains("renderizado")) {
      new Chart(ctx.getContext('2d'), {
        type: "line",
        data: {
          labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
          datasets: [
            {
              label: "Innovación en Colombia",
              data: [30, 45, 55, 60, 75, 80, 90],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: "Emprendimiento en Colombia",
              data: [25, 40, 50, 65, 70, 85, 95],
              backgroundColor: "rgba(255, 159, 64, 0.2)",
              borderColor: "rgba(255, 159, 64, 1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Año",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Nivel de Desarrollo (%)",
              },
            },
          },
        },
      });
      ctx.classList.add("renderizado"); // Marca el canvas como renderizado
    }
  }