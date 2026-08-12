import { useState } from 'react';
import { BarChart } from './components/BarChart';
import { TagSwitcher } from './components/TagSwitcher';
import { ColorKey } from './components/ColorKey';
import './App.css';

function App() {
  const [getChartData, setChartData] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [getTagNames, setTagNames] = useState(['Sleep', 'Work', 'School', 'Eat', 'Exercise', 'Leisure']);
  const [getColorNames, setColorNames] = useState(['#2ca02c', '#1f77b4', '#D4A82F', '#ff7f0e', '#9467bd', '#d62728']);
  const [getTextColors, setTextColors] = useState(['white', 'white', 'white', 'white', 'white', 'white']);
  const [getSelectedTag, setSelectedTag] = useState('Sleep');
  const [getTotalSegments, setTotalSegments] = useState(24);

  return (
    <>
      <h1>Day Calculator</h1>
      <BarChart
        getChartData={getChartData}
        setChartData={setChartData}
        getSelectedTag={getSelectedTag}
        getTagNames={getTagNames}
        getColorNames={getColorNames}
        getTextColors={getTextColors}
      />
      <TagSwitcher
        getTagNames={getTagNames}
        setTagNames={setTagNames}
        getSelectedTag={getSelectedTag}
        setSelectedTag={setSelectedTag}
        getTotalSegments={getTotalSegments}
        setTotalSegments={setTotalSegments}
        getColorNames={getColorNames}
        setColorNames={setColorNames}
        getTextColors={getTextColors}
        setTextColors={setTextColors}
        getChartData={getChartData}
        setChartData={setChartData}
      />
      <ColorKey
        getTagNames={getTagNames}
        getColorNames={getColorNames}
        setSelectedTag={setSelectedTag}
        getTextColors={getTextColors}
      />
    </>
  )
}

export default App
