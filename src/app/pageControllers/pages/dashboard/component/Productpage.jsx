/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"

const Productpage = () => {
  const {id}=useParams()
  return (
    <div>{id}</div>
  )
}

export default Productpage