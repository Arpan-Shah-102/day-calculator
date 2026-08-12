import "./ColorKey.css";

export function ColorKey({ getTagNames, getTextColors, getColorNames, setSelectedTag }) {
  return (
    <div className="color-key">
      {getTagNames.map((tagName, index) => {
        return (
          <div
            key={`color-${tagName}-${index}`}
            className="color-item"
            style={{ backgroundColor: getColorNames[index], color: getTextColors[index] }}
            onClick={() => setSelectedTag(tagName)}
          >
            {tagName}
          </div>
        )
      })}
    </div>
  )
}