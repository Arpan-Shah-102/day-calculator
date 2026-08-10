import './TagSwitcher.css';

export function TagSwitcher({ getTagNames, setTagNames, getSelectedTag, setSelectedTag, getTotalSegments, setTotalSegments }) {
  return (
    <>
      <p>TagNames: {getTagNames.join(', ')}</p>
      <p>SelectedTag: {getSelectedTag}</p>
      <p>TotalSegments: {getTotalSegments}</p>
      <p>SetTagNames: {setTagNames}</p>
      <p>SetSelectedTag: {setSelectedTag}</p>
      <p>SetTotalSegments: {setTotalSegments}</p>
    </>
  )
}
