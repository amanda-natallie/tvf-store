import { ChangeEvent, FC, MouseEvent, ReactNode, RefObject } from 'react'
import { Typography } from '../typography'
import { StyledContainer, StyledIconContainer, StyledInput } from './styles'

export interface InputProps {
  type?: string
  name?: string
  label?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLInputElement>) => void
  customStyles?: any
  inputError?: boolean
  messageError?: string
  id?: string
  checked?: boolean
  onIconClick?: () => void
  maxLength?: number
  customIcon?: ReactNode
  forwardRef?: RefObject<HTMLDivElement>
  customInputProps?: any
  noLabel?: boolean
}

export const Input: FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  checked = false,
  customStyles,
  onIconClick,
  customIcon,
  messageError = null,
  inputError = false,
  onClick,
  forwardRef,
  readonly,
  customInputProps,
  label,
  noLabel = false,
}) => {
  const hasIcon = checked || customIcon

  function handleIconClick(): void {
    if (onIconClick) onIconClick()
  }

  return (
    <StyledContainer ref={forwardRef}>
      {label ? (
        <Typography
          as="label"
          variant="body"
          size="small"
          colorScheme={{
            type: 'text',
            color: 'tertiary',
          }}
        >
          {label}
        </Typography>
      ) : null}
      <StyledInput
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        messageError={!!messageError || inputError}
        customStyles={customStyles}
        onClick={onClick}
        readOnly={readonly}
        autoComplete="off"
        {...customInputProps}
      />

      {hasIcon && (
        <StyledIconContainer onClick={handleIconClick} noLabel={noLabel}>
          {customIcon && customIcon}
        </StyledIconContainer>
      )}
    </StyledContainer>
  )
}

export default Input
