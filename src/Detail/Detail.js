import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
    let history = useHistory();
    let {id} = useParams(); // id는 문자

    
    const found = props.shoes.find((element) => {return element.id===Number(id-1)})





  return (
    <div className="container">        
      <div className="row">
        <div className="col-md-6">
          <img src={found.image} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{found.title}</h4>          
          <p>{found.content}</p>
          <p>{found.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={()=>{
              history.goBack()
          }}>뒤로하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail
