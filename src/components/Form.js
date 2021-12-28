const Form = ({
  name, onSubmit, title, isLoading, buttonText, children, isValid
}) => {
  
  return (
      <form
          className="modal__form"
          name={ `${ name }-form` }
          onSubmit={ onSubmit }
      >
        <h2 className="modal__title">{ title }</h2>
        { name === "confirm" ? null : children }
        <button
            disabled={ name === "confirm" ? false : !isValid || isLoading }
            className={ `button modal__button ${ isValid && !isLoading ? "" : "modal__button_disabled" }` }
            type="submit"
        >
          { isLoading ? "⏳ Сохранение..." : buttonText }
        </button>
      </form>
  )
}

export default Form
