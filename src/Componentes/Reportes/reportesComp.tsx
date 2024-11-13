import './reportesComp.css';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  

function ReportesComp(){
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Total',
        data: [30, 45, 28, 80, 99, 43, 65, 85, 90, 78, 45],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const barData = {
    labels: ['Padecimiento A', 'Padecimiento B', 'Padecimiento C', 'Padecimiento D'],
    datasets: [
      {
        label: 'Total Pacientes',
        data: [1500, 1254, 971, 532],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Completadas', 'Canceladas', 'Pendientes'],
    datasets: [
      {
        label: 'Total Citas',
        data: [2183, 345, 18],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffce56'],
      },
    ],
  };

  return (
    <div className="dashboard">

      {/* Cards Section */}
      <div className="generalDataRepRows">
        <div className="cardRep">
          <h3>Pacientes Registrados: </h3>
          <p className="repData">634</p>
        </div>
        <div className="cardRep">
          <h3>Consultas este año: </h3>
          <p className="repData">2183</p>
        </div>
        <div className="cardRep">
          <h3>Expedientes Nuevos: </h3>
          <p className="repData">241</p>
        </div>
        <div className="cardRep">
          <h3>Citas pendientes: </h3>
          <p className="repData">18</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart">
          <h3>Timeline de Consultas</h3>
          <Line data={lineData} />
        </div>
        <div className="chart">
          <h3>Top 4 padecimientos</h3>
          <Bar data={barData} />
        </div>
        <div className="chart">
          <h3>Status de Citas</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default ReportesComp