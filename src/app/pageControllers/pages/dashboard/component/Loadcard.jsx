import { useQuery } from "react-query";
import Cards from "./Cards"
import axois from "axios";
const Loadcard = () => {
  const cards = useQuery(['card'],
    async () => {
      return (await axois.get("http://localhost:4000/crops/all")).data;
    },[]);
  return (
    <div className="grid grid-cols-4 align-middle w-full h-[75vh] flex-wrap overflow-scroll my-10 gap-5">
        {(cards.data==undefined)?null:cards.data.map((data)=><><Cards key={'cards'} img={data.img} status={data.status} name={data.name} discription={data.description} id={data._id}/></>)}
    </div>
  ); 
};

export default Loadcard;
