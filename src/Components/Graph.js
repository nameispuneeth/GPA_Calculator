// CGPAChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CGPAChart({ data }) {
    const backgroundPlugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';

    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; 
    ctx.fillRect(0, 0, chart.width, chart.height);

    ctx.restore();
  }
};
    let temp=[];
    data.map((val,ind)=>{
        temp.push(`Semester - ${ind+1}`);
    })
  return (
  <div className='bg-white/10 backdrop-blur-md p-6 rounded-md shadow-md'>
  <Line data={{
    labels:temp,
    datasets:[{
        label:"SGPA",
        data:data,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 3,
        tension: 0.5
    }],
  }} 
  options={{
    plugins: {
      title: {
        display: true,
        text: 'SGPA Progress',
        color: 'white'
      },
      legend: {
        labels: {
          color: 'white'
        }
      },
      tooltip: {
        bodyColor: 'white',
        titleColor: 'lightblue'
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    }
  }}

  />
    </div>


    );
}
