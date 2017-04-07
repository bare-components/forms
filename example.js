import React from 'react'

export const Form = () => {}
export const Field = () => {}
export const Input = () => {}
export const Button = () => {}
export const LeftAlignLabel = () => {}

export const Example = () => {
  const styles = {}

  const handleEmailValidation = () => true

  return (
    <div style={ styles.page }>
      <div style={ styles.box }>
        <Form kind="signup">
          <div style={ styles.logo } />
          <Field>
            Email
            <Input name="email" onValidate={ handleEmailValidation } />
          </Field>
          <Field>
            Password
            <Input name="password" type="password" />
          </Field>
          <Field>
            <LeftAlignLabel label="Remember Me">
              <Input name="remember" type="checkbox" />
            </LeftAlignLabel>
          </Field>
          <div style={ styles.actions }>
            <Button>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
