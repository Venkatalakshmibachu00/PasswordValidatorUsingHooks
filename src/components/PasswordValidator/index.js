// Write your code here
import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordContainer,
  Title,
  Discription,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')

  const onChanePassword = event => setInput(event.target.value)

  const errorMsg =
    input.length < 8 ? 'Your password must be at least 8 characters' : ''

  return (
    <PasswordValidatorContainer>
      <PasswordContainer>
        <Title>Password Validator</Title>
        <Discription>Check how strong and secure is your password</Discription>
        <PasswordInput
          type="password"
          value={input}
          onChange={onChanePassword}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </PasswordContainer>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
