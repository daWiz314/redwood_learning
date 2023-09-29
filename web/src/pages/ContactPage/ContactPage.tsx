import {
  FieldError,
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <label name="name" errorClassName="error">
          Name
        </label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error"></FieldError>

        <label name="email" errorClassName="error">
          Email
        </label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error"></FieldError>

        <label name="message" errorClassName="error">
          Message
        </label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error"></FieldError>

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
