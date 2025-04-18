import * as React from "react"
import { colors } from "@/styles/theme"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 56}
    height={props.height ?? 60}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M27.947 47.646c13.157 0 23.823-10.666 23.823-23.823S41.104 0 27.947 0 4.124 10.666 4.124 23.823 14.79 47.646 27.947 47.646Z"
    />
    <path
      fill="#fff"
      d="M8.648 37.76.45 51.969l9.567-.508L14.364 60l7.583-13.146a23.798 23.798 0 0 1-13.3-9.094Zm38.645-.071a23.806 23.806 0 0 1-13.264 9.142L41.636 60l4.346-8.54 9.567.508-8.256-14.279Z"
    />
    <path
      fill="#454545"
      d="M27.947 41.09c9.537 0 17.268-7.73 17.268-17.267 0-9.537-7.731-17.268-17.268-17.268s-17.268 7.731-17.268 17.268S18.41 41.09 27.947 41.09Z"
    />
    <path
      fill="#fff"
      d="M39.782 21.957c.531-.52.236-1.43-.496-1.536l-6.816-.992a.888.888 0 0 1-.673-.496l-3.047-6.177a.9.9 0 0 0-1.618 0l-3.036 6.177a.938.938 0 0 1-.673.496l-6.815.992c-.732.107-1.027 1.016-.496 1.536l4.925 4.807a.91.91 0 0 1 .26.791l-1.157 6.78c-.13.732.65 1.299 1.31.944l6.095-3.2a.88.88 0 0 1 .839 0l6.094 3.2a.905.905 0 0 0 1.311-.944l-1.169-6.78a.889.889 0 0 1 .26-.791l4.901-4.807Z"
    />
  </svg>
)
export default SvgComponent
