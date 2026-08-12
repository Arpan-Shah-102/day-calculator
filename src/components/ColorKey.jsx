import "./ColorKey.css";

export function ColorKey({ getTagNames, getColorNames }) {
  return (
    <div className="color-key">
      {getTagNames.map((tagName, index) => {
        return (
          <div
            key={`color-${tagName}-${index}`}
            className="color-item"
            style={{ backgroundColor: getColorNames[index] }}
          >
            {tagName}
          </div>
        )
      })}
    </div>
  )
}