import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function NoHeart(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M24 8L8 24M8 8l16 16"
        stroke="#E16359"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NoHeart
