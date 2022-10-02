import React from 'react'
import { IconProps } from './types'
import { colors } from 'theme'

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color = colors.grayScale[600], width = 16, height = 16 } = props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        {...{ width, height, ref }}
        viewBox="0 0 16 16"
      >
        <title>ChevronDownIcon</title>
        <g
          id="ChevronDownIcon-Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="ChevronDownIcon" transform="translate(-599.000000, -760.000000)">
            <g id="chevron-down" transform="translate(599.000000, 760.000000)">
              <rect id="Frame" x="0" y="0" width="16" height="16" />
              <polyline
                id="arrow-down"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="1 4 8 11 15 4"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  },
)
ChevronDownIcon.displayName = 'ChevronDownIcon'
export default ChevronDownIcon
