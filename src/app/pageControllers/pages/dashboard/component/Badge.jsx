/* eslint-disable react/prop-types */
const Badge = (props) => {
  return (
    <span className="inline-flex items-center bg-emerald-500/50 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-emerald-500">
              {props.data}
    </span>
  )
}

export default Badge