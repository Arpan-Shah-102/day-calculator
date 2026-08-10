import { useState } from 'react'
import { BarChart } from './components/BarChart'
import './App.css'

function App() {
  const chartData = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [getChartData, setChartData] = chartData;

  return (
    <>
      <h1>Day Calculator</h1>
      <BarChart ChartData={getChartData} />
    </>
  )
}

export default App
