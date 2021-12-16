import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: false,
        },
    },
};

const labels = ['03/01', '03/02', '03/03', '03/04', '03/05'];

export const data = {
    labels,
    datasets: [
        {
            label: '행복',
            data: ['0.01', '0.2', '0.33', '0.98', '0.5'],
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

        {
            label: '슬픔',
            data: ['0.13', '0.4', '0.223', '0.178', '0.52'],
            borderColor: 'rgba(53, 162, 235, 0.5)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function LineChart() {
    return <Line options={options} data={data} />;
}
