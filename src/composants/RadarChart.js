// RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ scores }) => {
  const data = {
    labels: scores.map(score => score.subaxis_id), // Utilisation des IDs des sous-axes comme labels
    datasets: [{
      label: 'Score moyen par sous-axe',
      data: scores.map(score => score.average_score.toFixed(2)), // Utilisation du score moyen
      borderWidth: 2,
      borderColor: 'rgba(54, 162, 235, 0.6)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 5
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  };

  return (
    <div className="radar-chart">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
