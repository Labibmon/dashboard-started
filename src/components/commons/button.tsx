import styled, { css } from "styled-components";
import { ThemeInterface } from "@/pages/_app";

interface ButtonProps {
  size?: keyof ThemeInterface['size']
  variant?: keyof ThemeInterface['colors']
  outline?: boolean
}

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['variant'].includes(prop),
}).attrs<ButtonProps>(
  ({ variant }) => ({
    variant: variant || 'primary'
  })
)`
  cursor: pointer;
  border-radius: 4px;
  padding: 6px 16px;
  min-width: 64px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  
  /* Pass a function to compose key-value styles. The function accepts props as argument. Return eventual CSS property and value in "dynamicStyles" */
  ${(props) => dynamicStyles(props)}
`

const dynamicStyles = (props: any) => {
  const { variant, outline, theme } = props;

  const color = outline ? theme.colors[variant] : 'white';
  const background = outline ? 'transparent' : theme.colors[variant];
  const border = outline ? "1px solid " + color : "none";
  
  // Use the css helper function to generate CSS from a template literal with interpolations. 
  return css`
    color: ${color};
    border: ${border};
    background-color: ${background};
  `;
};

export default Button;