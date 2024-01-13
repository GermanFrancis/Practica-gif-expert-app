// eslint-disable-next-line react/prop-types
export const ButtonDelete = ({ onClick, textButton }) => {
  return (
    <button onClick={onClick} className="button">
      {textButton}
      </button>
  )
}
