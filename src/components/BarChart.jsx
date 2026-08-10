import './BarChart.css';

export function BarChart({ getChartData, setChartData, getSelectedTag }) {
  function handleBarClick(index) {
    const newChartData = [...getChartData];
    newChartData[index] = !newChartData[index];
    setChartData(newChartData);
  }

  return (
    <div className={getChartData && `bar-chart bars-${getChartData.length}`}>
      {getChartData.map((value, index) => {
        return (
          <abbr title={`${value ? getSelectedTag : 'Empty'} - Segment ${index + 1}`} key={`abbr-${value}-${index}`}>
            <div
              className={
                `bar ${getSelectedTag.toLowerCase()} bar-${index} ${value ? `active ${getSelectedTag.toLowerCase()}` : ''}`
              }
              onClick={() => {handleBarClick(index);}}
            >
              {(index + 1) % 12 || 12}
            </div>
          </abbr>
        )
      })}
    </div>
  )
}