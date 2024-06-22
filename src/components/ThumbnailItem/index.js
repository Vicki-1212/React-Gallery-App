// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageList, updateImgId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageList

  const hoverCall = isActive ? `thumbnail hover` : `thumbnail`

  const onClickImage = () => {
    updateImgId(id)
  }
  return (
    <li className="image-list">
      <button className="button" type="button" onClick={onClickImage}>
        <img
        src={thumbnailUrl}
        className={hoverCall}
        alt={thumbnailAltText}
      />
      </button>
    </li>
  )
}

export default ThumbnailItem
