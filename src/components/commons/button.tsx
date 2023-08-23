import { FC, ReactNode } from "react"
import styled from "styled-components";
import { ThemeInterface } from "@/pages/_app";

export type ButtonProps = {
  id?: string
  children?: ReactNode
  onClick?: () => void
  variant: keyof ThemeInterface['colors']
  outline?: boolean
  size?: keyof ThemeInterface['size']
}
const ButtonStyled = styled.button<
  Pick<ButtonProps, 'variant' | 'outline'>
>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  // Set Theme Button
  color: ${({ theme, variant, outline }) => outline ? theme.colors[variant] : 'white'};
  border: 2px solid ${({ theme, variant }) => theme.colors[variant]};
  background-color: ${({ theme, variant, outline }) => outline ? 'transparent' : theme.colors[variant]};
`


const Button: FC<ButtonProps> = ({
  children,
  onClick,
  id,
  variant,
  outline
}) => {
  return (
    <ButtonStyled
      id={id}
      variant={variant}
      onClick={onClick}
      outline={outline}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button;