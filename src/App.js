import React,{useState,useEffect} from "react";
import "./App.css";
export default function App() {
  const [mainData,setMainData] = useState([]);
  const [data,setData] = useState([]);
  const [breed,setBreed] = useState("affenpinscher");

  const handleBreed = (e)=>{
    setBreed(e.target.value);
  }
  const handleSubBreed = (e)=>{
    setSubBreed(e.target.value);
  }

  useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res)=>res.json())
    .then((res)=>setMainData(Object.keys(res.message)));
  },[])

  useEffect(()=>{
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res)=>res.json())
    .then((res)=>setData(res));
  },[breed])

  console.log(mainData);
  console.log(data);

  return (
    <div className="App">
	  <h1>Frontend Developer Opportunity at Healthifyme | Task Round</h1>
    <div>
      <div className="selectContainer">
        <label htmlFor="breed">Enter Breed </label>
        <select name="" id="breedSelector"  onChange={handleBreed}>
          {mainData.map((elem,i)=>(
            <option value={elem}>{elem}</option>
          ))}
        </select>
      </div>
    </div>
    <div>
    <img src={data.message} alt=""/>
    </div>
    </div>
  );
}
