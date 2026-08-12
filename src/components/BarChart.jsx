import './BarChart.css';

export function BarChart({ getChartData, setChartData, getSelectedTag, getTagNames, getColorNames, getTextColors }) {
  function handleBarClick(event, index) {
    const newChartData = [...getChartData];

    if (newChartData[index] && newChartData[index] !== getSelectedTag) {
      newChartData[index] = getSelectedTag;
    } else {
      newChartData[index] = newChartData[index] ? '' : getSelectedTag;
    }
    setChartData(newChartData);

    const barElement = event.target;
    if (newChartData[index]) {
      barElement.style.backgroundColor = getColorNames[getTagNames.indexOf(getSelectedTag)];
      barElement.style.color = getTextColors[getTagNames.indexOf(getSelectedTag)];
    } else {
      barElement.style.backgroundColor = "white";
      barElement.style.color = "black";
    }
  }
  function decimalTimeFormatted(decimalTime) {
    if (decimalTime % 1 == 0) return decimalTime;
    let newDecimalTime = decimalTime.toString().split('.');
    if (newDecimalTime[0] < 1) newDecimalTime[0] = '12';
    newDecimalTime[1] = (newDecimalTime[1] * 6).toString().slice(0, 2);
    return newDecimalTime.join(':');
  }

  return (
    <div className={getChartData && `bar-chart bars-${getChartData.length}`}>
      {getChartData.map((value, index) => {
        let time = (index + 1) % 12 || 12;
        if (getChartData.length === 12) {
          time = (index * 2) % 12 || 12;
        } else if (getChartData.length === 48) {
          time = (index / 2 + 1) % 12 || 12;
        } else if (getChartData.length == 96) {
          time = (index / 4 + 1) % 12 || 12;
        }
        const isAM = index == 11 ? false : index == 23 ? true : index < 12;
        return (
          <abbr title={`${value ? value : 'Empty'} - ${time} ${isAM ? "AM" : "PM"}`} key={`abbr-${index}`}>
            <div
              className={
                `bar bar-${index} ${value ? `active ${value.toLowerCase()}` : ''}`
              }
              onClick={(e) => {handleBarClick(e, index);}}
              data-current-tag={value}
            >
              {decimalTimeFormatted(time)} {isAM ? "AM" : "PM"}
            </div>
          </abbr>
        )
      })}
    </div>
  )
}