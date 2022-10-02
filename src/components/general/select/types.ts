import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'

export interface SelectOptionProps {
  value: string
  label: string
}
export interface SelectProps {
  options: SelectOptionProps[]
  value: string
  name: string
  placeholder: string
  disabled?: boolean
  error?: string
  customStyles?: React.CSSProperties
  label?: string
  setValue: (value: string) => void
  messageError?: string
  inputError?: boolean
  popupCustomStyles?: React.CSSProperties
}

export interface DropdownItemProps {
  title: string
  onClick: () => void
  active?: boolean
}

export interface DropdownProps {
  text?: string
  active?: boolean
  onClick?: () => void
  disabled?: boolean
  customStyles?: CSSObject | FlattenSimpleInterpolation
}
