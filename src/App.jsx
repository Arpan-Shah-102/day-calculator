import { useState } from 'react';
import { BarChart } from './components/BarChart';
import { TagSwitcher } from './components/TagSwitcher';
import './App.css';

function App() {
  const [getChartData, setChartData] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [getTagNames, setTagNames] = useState(['Sleep', 'Work', 'Eat', 'Exercise', 'Leisure']);
  const [getSelectedTag, setSelectedTag] = useState('Sleep');
  const [getTotalSegments, setTotalSegments] = useState(24);

  return (
    <>
      <h1>Day Calculator</h1>
      <BarChart
        getChartData={getChartData}
        setChartData={setChartData}
        getSelectedTag={getSelectedTag}
      />
      <TagSwitcher
        getTagNames={getTagNames}
        setTagNames={setTagNames}
        getSelectedTag={getSelectedTag}
        setSelectedTag={setSelectedTag}
        getTotalSegments={getTotalSegments}
        setTotalSegments={setTotalSegments}
      />
    </>
  )
}

export default App
