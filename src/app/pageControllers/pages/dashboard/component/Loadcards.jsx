import { useQuery } from "react-query";
import Cards from "./Cards"
import axois from "axios";
import { useAtom } from "jotai";
import { card } from "../../../../../utils/atoms";
const Loadcards = () => {
 const [cards,setcard] = useAtom(card);
useQuery(['card'],
    async () => {
      return await axois.get("http://localhost:4000/crops/all").then((res)=>{
      setcard(res.data)
      }).catch((e)=>[
        alert(e)
      ]);
    },[]);
  return (
    <div className="flex align-middle w-full h-[75vh] flex-wrap overflow-scroll my-10 gap-3">
        {(cards==undefined)?null:cards.map((data)=><><Cards key={'cards'} img={data.img} status={data.status} name={data.name} discription={data.description} id={data._id}/></>)}
    </div>
  ); 
};

export default Loadcards;
