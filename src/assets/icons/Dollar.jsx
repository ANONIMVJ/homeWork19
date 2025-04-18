import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 38}
    height={props.height ?? 60}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M.835 41.835C.835 51.867 8.968 60 19 60s18.165-8.133 18.165-18.165c0-10.033-8.133-18.165-18.165-18.165S.835 31.802.835 41.835Zm16.408-8.614v-2.285h3.515v2.293a5.227 5.227 0 0 1 4.368 5.148h-3.515c0-.94-.765-1.704-1.704-1.704H18.05c-.938 0-1.702.764-1.702 1.702 0 .939.764 1.702 1.702 1.702h1.9a5.223 5.223 0 0 1 5.217 5.217 5.225 5.225 0 0 1-4.41 5.155v2.285h-3.515v-2.28a5.164 5.164 0 0 1-4.382-5.098h3.515c0 .904.736 1.64 1.641 1.64h1.934c.939 0 1.702-.763 1.702-1.702 0-.938-.764-1.701-1.702-1.701h-1.9a5.223 5.223 0 0 1-5.217-5.218 5.225 5.225 0 0 1 4.41-5.154Zm5.294-12.779a21.565 21.565 0 0 1 10.575 4.934v-13.37h3.53V8.817L27.825 0l-8.818 8.818v3.188h3.53v8.436Zm-17.65 4.934a21.566 21.566 0 0 1 10.576-4.934V17.63h3.53v-3.189l-8.818-8.817-8.818 8.817v3.19h3.53v7.745Z"
    />
  </svg>
)
export default SvgComponent
