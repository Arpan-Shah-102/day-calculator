import './TagSwitcher.css';

export function TagSwitcher({ getTagNames, setTagNames, getSelectedTag, setSelectedTag, getTotalSegments, setTotalSegments, getColorNames, setColorNames }) {
  function updateColor(newColor) {
    const newColorNames = [...getColorNames];
    newColorNames[getTagNames.indexOf(getSelectedTag)] = newColor;
    setColorNames(newColorNames);
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
      <select className="total-sections">
        <option value="12" selected={getTotalSegments === 12}>12 Sections</option>
        <option value="24" selected={getTotalSegments === 24}>24 Sections</option>
        <option value="48" selected={getTotalSegments === 48}>48 Sections</option>
        <option value="96" selected={getTotalSegments === 96}>96 Sections</option>
      </select>
    </div>
  )
}
