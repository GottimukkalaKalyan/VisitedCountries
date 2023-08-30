import './index.css'

const CreateItem = props => {
  const {itemDetails, deleteBtn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDltBtn = () => {
    deleteBtn(id)
  }
  return (
    <li className="listItemCard">
      <div className="timeLogoUrlContainer">
        <div className="time">
          <p className="">{timeAccessed}</p>
        </div>
        <div className="middleCard">
          <img src={logoUrl} alt="domain logo" className="logoUrl" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div className="deleteContainer">
        <button
          type="button"
          className="dltButton"
          onClick={onDltBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="logoUrl"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CreateItem
