import React from 'react';
import styled from 'styled-components';

const Input = styled.label`
  display: flex;
  align-items: center;
  > span{
    margin-right: 16px;
    white-space: nowrap;
  }
  > input{
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
`

type Props = {
  label:string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Label: React.FC<Props> = (props)=>{
  const {label, children,...rest} = props
  return (
    <Input>
      <span>{props.label}</span>
      <input type="text"
             {...rest}
      />
    </Input>
  )
}

export default Label
