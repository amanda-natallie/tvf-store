import { ChangeEvent, FC, MouseEvent, ReactNode, RefObject } from 'react'
import { Typography } from '../typography'
import { StyledContainer, StyledIconContainer, StyledInput } from './styles'

export interface InputProps {
  type?: string
  name?: string
  label?: string
  value: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
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
    <StyledContainer ref={forwardRef} {...{ type }}>
      {label ? (
        <Typography
          as="label"
          variant="body"
          size="small"
          colorScheme={{
            type: 'text',
            color: 'label',
          }}
        >
          {label}
        </Typography>
      ) : null}
      <StyledInput
        {...{
          id,
          name,
          type,
          value,
          onChange,
          placeholder,
          maxLength,
          disabled,
          customStyles,
          checked,
          onClick,
        }}
        messageError={!!messageError || inputError}
        readOnly={readonly}
        autoComplete="off"
        checked={checked}
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
