import { useState, useEffect } from "react";

const ListScreen = (data:{list:any[]}) => {

  return (
  <table>
    <thead>
      <tr>
        <th>제목</th>
        <th>가수</th>
        <th>번호</th>
      </tr>
    </thead>
    <tbody>
      {data.list.map((item:any, index:number)=>{
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.artist}</td>
            <td>{item.tj}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  );
};

export default ListScreen;
