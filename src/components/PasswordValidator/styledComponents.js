// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordContainer = styled(PasswordValidatorContainer)`
  background-color: #475569;
  border-radius: 10px;
  height: 50vh;
  padding: 5%;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 38px;
  font-weight: 550;
`

export const Discription = styled.p`
  color: #f8fafc;
  margin-top: 0px;
  font-size: 12px;
`

export const PasswordInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: #edeeff;
  border: none;
  margin-top: 30px;
  border-radius: 5px;
`

export const ErrorMsg = styled.p`
  color:  #ef4444;
  font-size: 13px;
`
