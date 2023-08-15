import { Button as MuiButton, ButtonProps } from '@mui/material'

const Button = ({ children, ...rest }: ButtonProps): ReactNode => {
  return (
    <MuiButton size='large' {...rest}>
      {children}
    </MuiButton>
  )
}

export default Button
