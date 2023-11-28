import Movie from "@/app/componets/movie"
import RecentlyAdded from "../componets/RecentlyAdded"
export default function homePage(){
    return(
    <>
    <div className=" p-5 lg:p-0 ">


    <Movie/>
    <h1 className=" text-3xl font-bold ">تازه  ترین فیلم ها  </h1>
    <RecentlyAdded/>
    
    </div>
    
    </>
    )
}