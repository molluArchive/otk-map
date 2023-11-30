import { useState, useEffect } from "react";
import ListScreen from "./listScreen";
import api from "src/api/api";

const MainScreen = () => {
  const [searchText, setSearchText] = useState<string>("")
  const [list, setList] = useState<any[]>([])

  useEffect(()=>{
    search()
  },[])

  const search = async () => {
    const result = await api("/list",{zzzz:"adfads"})
    setList(result)
  }

  return (
  <div>
    <div>
      <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder="검색"/>
      <button onClick={search}>검색</button>
    </div>
    <div>
      <ListScreen list={list}></ListScreen>
    </div>
  </div>
  );
};

export default MainScreen;
