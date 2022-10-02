import React, { useCallback, useRef, useState } from 'react'

import * as Icons from 'components/icons'
import { useClickOutside } from 'hooks'
import { palette } from 'theme'

import Input from '../input'
import { MenuItem, StyledArrow, StyledPopupActions } from './styles'
import { SelectOptionProps, SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({
  name,
  customStyles,
  disabled = false,
  label,
  placeholder,
  options,
  value,
  setValue,
  messageError,
  inputError,
  popupCustomStyles,
}) => {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = useCallback(() => {
    if (!disabled) {
      setIsActive(!isActive)
    }
  }, [isActive, disabled])

  const dropdownRef = useRef<HTMLDivElement>(null)
  useClickOutside(dropdownRef, () => {
    if (isActive) toggleActive()
  })

  return (
    <div style={{ position: 'relative' }}>
      <Input
        inputError={inputError}
        messageError={messageError}
        forwardRef={dropdownRef}
        type="text"
        name={name}
        label={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => e.preventDefault()}
        onClick={toggleActive}
        value={
          value && options.length > 0
            ? options.filter((item: SelectOptionProps) => item.value === value)[0]?.label
            : ''
        }
        disabled={disabled}
        readonly
        placeholder={placeholder}
        customStyles={{
          background: palette.text.inverted,
          justifyContent: 'space-between',
          cursor: 'pointer',
          ...customStyles,
        }}
        customIcon={
          <StyledArrow
            active={isActive}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 16 16"
          >
            <Icons.ChevronDownIcon
              color={!disabled ? palette.primary.dark : palette.text.disabled}
            />
          </StyledArrow>
        }
        onIconClick={toggleActive}
      />
      {!disabled && (
        <StyledPopupActions
          customStyles={{
            ...popupCustomStyles,
          }}
          active={isActive}
          style={{ width: '100%' }}
        >
          {Object.keys(options).length > 0 &&
            options.map((item: SelectOptionProps, index: number) => (
              <MenuItem key={index} onClick={(): void => setValue(item.value)}>
                {item.label}
              </MenuItem>
            ))}
        </StyledPopupActions>
      )}
    </div>
  )
}

export default Select
