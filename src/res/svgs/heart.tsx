import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Heart(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M27.787 6.147a7.333 7.333 0 00-10.374 0L16 7.56l-1.413-1.413A7.335 7.335 0 004.213 16.52l1.414 1.413L16 28.307l10.373-10.374 1.414-1.413a7.333 7.333 0 000-10.373z"
        fill="#6BD88E"
        stroke="#6BD88E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Heart
