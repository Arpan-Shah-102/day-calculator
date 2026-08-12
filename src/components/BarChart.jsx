import './BarChart.css';

export function BarChart({ getChartData, setChartData, getSelectedTag, getTagNames, getColorNames }) {
  function handleBarClick(event, index) {
    // const elementColor = event.target.style.backgroundColor;
    const newChartData = [...getChartData];

    // if (elementColor == "white" || elementColor == getColorNames[getTagNames.indexOf(getSelectedTag)]) {
      newChartData[index] = !newChartData[index];
      setChartData(newChartData);
    // }

    const barElement = event.target;
    if (newChartData[index]) {
      barElement.style.backgroundColor = getColorNames[getTagNames.indexOf(getSelectedTag)];
    } else {
      barElement.style.backgroundColor = "white";
    }
  }

  return (
    <div className={getChartData && `bar-chart bars-${getChartData.length}`}>
      {getChartData.map((value, index) => {
        const time = (index + 1) % 12 || 12;
        const isAM = index == 11 ? false : index == 23 ? true : index < 12;
        return (
          <abbr title={`${value ? getSelectedTag : 'Empty'} - ${time} ${isAM ? "AM" : "PM"}`} key={`abbr-${index}`}>
            <div
              className={
                `bar ${getSelectedTag.toLowerCase()} bar-${index} ${value ? `active ${getSelectedTag.toLowerCase()}` : ''}`
              }
              onClick={(e) => {handleBarClick(e, index);}}
            >
              {time} {isAM ? "AM" : "PM"}
            </div>
          </abbr>
        )
      })}
    </div>
  )
}