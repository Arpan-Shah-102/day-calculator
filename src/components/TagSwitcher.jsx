import { getTextColor } from '../utils/fontColorGenerator';
import './TagSwitcher.css';

export function TagSwitcher({ getChartData, setChartData, getTextColors, setTextColors, getTagNames, setTagNames, getSelectedTag, setSelectedTag, getTotalSegments, setTotalSegments, getColorNames, setColorNames }) {
  function updateColor(newColor) {
    const newColorNames = [...getColorNames];
    newColorNames[getTagNames.indexOf(getSelectedTag)] = newColor;
    setColorNames(newColorNames);
    const newTextColors = [...getTextColors];
    newTextColors[getTagNames.indexOf(getSelectedTag)] = getTextColor(newColor);
    setTextColors(newTextColors);

    const allTagsSelected = document.querySelectorAll(`.bar.active.${getSelectedTag.toLowerCase()}`);
    if (allTagsSelected.length < 1) return;
    allTagsSelected.forEach((tag) => {
      if (tag.dataset.currentTag === getSelectedTag) {
        tag.style.backgroundColor = newColor;
        tag.style.color = getTextColor(newColor);
      }
    });
  }

  function createNewTag() {
    const inputElement = document.querySelector('.new-label-create input');
    const newTagName = inputElement.value;
    if (newTagName && !getTagNames.includes(newTagName)) {
      const newRandomColor = Math.floor(Math.random()*16777215).toString(16);
      const newTagNames = [...getTagNames, newTagName];
      const newColorNames = [...getColorNames, `#${newRandomColor}`];
      const newTextColors = [...getTextColors, 'white'];
      setTagNames(newTagNames);
      setColorNames(newColorNames);
      setTextColors(newTextColors);
      inputElement.value = '';

      setSelectedTag(newTagName);
      document.querySelector('.color-picker').value = `#${newRandomColor}`;
    }
  }

  function deleteTag() {
    if (getTagNames.length > 0) {
      const indexToDelete = getTagNames.indexOf(getSelectedTag);
      const newTagNames = [...getTagNames];
      const newColorNames = [...getColorNames];
      const newTextColors = [...getTextColors];
      newTagNames.splice(indexToDelete, 1);
      newColorNames.splice(indexToDelete, 1);
      newTextColors.splice(indexToDelete, 1);
      setTagNames(newTagNames);
      setColorNames(newColorNames);
      setTextColors(newTextColors);

      const allTagsSelected = document.querySelectorAll(`.bar.active.${getSelectedTag.toLowerCase()}`);
      allTagsSelected.forEach((tag) => {
        if (tag.dataset.currentTag === getSelectedTag) {
          tag.style.backgroundColor = "white";
          tag.style.color = "black";
          tag.dataset.currentTag = '';
        }
      });

      setSelectedTag(newTagNames[0] || '');
      document.querySelector('.color-picker').value = newColorNames[0] || '#000000';
    }
  }

  function resetChart() {
    const allTagsSelected = document.querySelectorAll(`.bar`);
    allTagsSelected.forEach((tag, index) => {
      tag.style.backgroundColor = "white";
      tag.style.color = "black";
      tag.dataset.currentTag = '';
      tag.classList = `bar bar-${index}`;
    });
    setChartData(getChartData.fill(''));
  }

  function updateTotalSegments(newTotal) {
    setTotalSegments(newTotal);
    resetChart();
    setChartData(Array(newTotal).fill(''));
  }

  return (
    <div className="tag-switcher">
      <select
        className="switch-tag-select"
        onChange={(e) => {setSelectedTag(e.target.value);}}
      >
        {getTagNames.map((tagName, index) => {
          return (
            <option
              key={`option-${tagName}-${index}`}
              value={tagName}
              selected={tagName === getSelectedTag}
            >
              {tagName}
            </option>
          )
        })}
      </select>
      <label>
        Color:
        <input
          type="color"
          value={getColorNames[getTagNames.indexOf(getSelectedTag)]}
          className="color-picker"
          onChange={(e) => {updateColor(e.target.value);}}
        />
      </label>
      <select
        className="total-sections"
        onChange={(e) => {updateTotalSegments(parseInt(e.target.value));}}
      >
        <option value="12" selected={getTotalSegments === 12}>2 Hours</option>
        <option value="24" selected={getTotalSegments === 24}>1 Hour</option>
        <option value="48" selected={getTotalSegments === 48}>30 Minutes</option>
        <option value="96" selected={getTotalSegments === 96}>15 Minutes</option>
      </select>
      <div className="new-label-create">
        <input
          type="text"
          placeholder="Create new label"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              createNewTag();
            }
          }}
        />
        <button
          onClick={createNewTag} 
          className="create-button"
        >
          Create
        </button>
      </div>
      <button
        className="delete-tag"
        onClick={deleteTag}
      >
        Delete Label
      </button>
      <button
        className="reset-chart"
        onClick={resetChart}
      >
        Clear Chart
      </button>
    </div>
  )
}
