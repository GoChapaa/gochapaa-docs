import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface TokenomicsData {
  name: string;
  value: number;
  percentage: number;
  color: string;
  vesting: string;
}

const TokenomicsChart: React.FC = () => {
  const data: TokenomicsData[] = [
    {
      name: 'Investors',
      value: 116000000,
      percentage: 20,
      color: '#8884d8',
      vesting: '2 years'
    },
    {
      name: 'Founders & Core Team',
      value: 116000000,
      percentage: 20,
      color: '#82ca9d',
      vesting: '5 years'
    },
    {
      name: 'Ecosystem & Incentives',
      value: 145000000,
      percentage: 25,
      color: '#ffc658',
      vesting: '5 years'
    },
    {
      name: 'Foundation',
      value: 145000000,
      percentage: 25,
      color: '#ff7300',
      vesting: '5 years'
    },
    {
      name: 'Charity',
      value: 58000000,
      percentage: 10,
      color: '#00ff00',
      vesting: '10 years'
    }
  ];

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    }
    return value.toString();
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>{data.name}</p>
          <p style={{ margin: '0 0 4px 0' }}>Amount: {formatValue(data.value)} GOC</p>
          <p style={{ margin: '0 0 4px 0' }}>Percentage: {data.percentage}%</p>
          <p style={{ margin: '0' }}>Vesting: {data.vesting}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: '400px', margin: '20px 0' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>GOC Token Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name}: ${percentage}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>
                {value} ({data.find(d => d.name === value)?.percentage}%)
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Total Genesis Supply:</strong> 580,000,000 GOC</p>
        <p><strong>Token Symbol:</strong> GOC</p>
        <p><strong>Blockchain:</strong> Ethereum & Layer 2</p>
      </div>
    </div>
  );
};

export default TokenomicsChart;

