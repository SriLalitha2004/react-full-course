import React,{useState} from "react";

const Index = () => {
  const [count,setCount]=useState(0) 
  onIn=prev=>{
    return prev+1
  }
  onDe=prev=>{
    return prev-1
  }
  
  return (
    <div>
      <button>-</button>
      <p>{count}</p>
      <button>+</p>
    </div>
  );
};

export default Index;
