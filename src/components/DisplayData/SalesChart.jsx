import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './SalesChart.scss';

// Dummy data for today and week
const todayData = [
  { category: 'Biryani', orders: 130 },
  { category: 'Veg meals', orders: 100 },
  { category: 'Cake', orders: 56 },
  { category: 'IceCream', orders: 45 },
  { category: 'Beverages', orders: 60 },
  { category: 'Tea', orders: 120 },
  { category: 'Coffee', orders: 110 },
  { category: 'Snacks', orders: 80 },
];

const weekData = [
  { category: 'Biryani', orders: 860 },
  { category: 'Veg meals', orders: 600 },
  { category: 'Cake', orders: 400 },
  { category: 'IceCream', orders: 340 },
  { category: 'Beverages', orders: 700 },
  { category: 'Tea', orders: 920 },
  { category: 'Coffee', orders: 480 },
  { category: 'Snacks', orders: 620},
];

const SalesChart = () => {
  const [timePeriod, setTimePeriod] = useState('today');

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  const chartData = timePeriod === 'today' ? todayData : weekData;

  return (
    <div className="chart-container">
      <div className="dropdown-container">
        <label htmlFor="time-period">Select Time Period: </label>
        <select id="time-period" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="today">Today's Statistics</option>
          <option value="week">One Week Statistics</option>
        </select>
      </div>

      <ResponsiveContainer width="70%" height={380}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
