import Form from "./Form"
import Popup from "./Popup"

function PopupWithForm({
  name,
  title,
  buttonText = "Сохранить",
  children,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  isFormValid
}) {
  return (
      <Popup
          isOpen={ isOpen }
          name={ name }
          onClose={ onClose }
      >
        <Form
            name={ name }
            title={ title }
            onSubmit={ onSubmit }
            buttonText={ buttonText }
            isLoading={ isLoading }
            isValid={ isFormValid }
        >
          { children }
        </Form>
      </Popup>
  )
}

export default PopupWithForm
