import { useState } from "react";
import { AiTwotoneBoxPlot } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CGPAChart from "./Graph";
export default function CGPA(){
    const navigate=useNavigate();
    const [SGPAs,setSGPAs]=useState([10.0,10.0,10.0]);
    const [CGPA,setCGPA]=useState(null);
    const handleDecrement=()=>{
        if(SGPAs.length>1){
            const updated=[...SGPAs];
            updated.pop();
            setSGPAs(updated);
            setCGPA(null);
        }
    }
    const handleIncrement=()=>{
        if(SGPAs.length<8){
            const updated=[...SGPAs];
            updated.push(10.0);
            setSGPAs(updated);
            setCGPA(null);

        }
    }
    const HandleChange=(ind,val)=>{
        if(val>10){
            alert("All Values Have to Be Less Than 10");
            val=10.0;
        }
        const updated=[...SGPAs];
        updated[ind]=val;
        setSGPAs(updated);
        setCGPA(null);

    }
    const findCGPA=()=>{
        let val=0;
        for(let i=0;i<SGPAs.length;i++){
            val=val+SGPAs[i];
        }
        val=val/SGPAs.length;
        setCGPA(val.toFixed(2));
    }
    return(
        <>
        <button className='absolute top-[10px] left-[10px] font-bold text-white  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition flex items-center gap-3 rounded-full p-2 w-13' onClick={()=>navigate("/")}><AiTwotoneBoxPlot /></button>
        <div className="transparent-box">
            <form className="max-w-md mx-auto mb-6">
                <label className="block mb-2 text-lg font-semibold">
                Select Number of Semester Grades (1–8)
                </label>
                <div className="flex items-center justify-center space-x-4">
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="h-8 w-8 rounded-md bg-white/20 text-white hover:bg-white/30 text-xl font-bold"
                >
                    −
                </button>
                <span className="text-xl font-semibold">{SGPAs.length}</span>
                <button
                    type="button"
                    onClick={handleIncrement}
                    className="h-8 w-8 rounded-md bg-white/20 text-white hover:bg-white/30 text-xl font-bold"
                >
                    +
                </button>
                </div>
            </form>
            <div className="space-y-6">
                {SGPAs.map((val,ind)=>(
                    <div key={ind} className="bg-white/10 p-5 rounded-sm m-2 shadow-md backdrop-blur-md flex justify-center items-center">
                        <h3 className="text-l font-bold mr-7 mt-1">Semester - {ind + 1} Grade :  </h3>
                        <input type="number" value={val} onChange={(e)=>HandleChange(ind,parseFloat(e.target.value))} className="text-white font-medium rounded-md bg-white/20 text-center w-16 h-8"></input>
                    </div>
                ))}
            </div>
            <button className="w-full px-3 py-2 rounded-md bg-white/20 text-white focus:outline-none mt-10 mb-10 font-semibold h-14" onClick={()=>findCGPA()}>Generate CGPA</button>
            {CGPA && 
                <div>
                    <h1 className='font-semibold text-lg mb-3' >Your Cumulative Grade Point Average is <strong className="font-extrabold">{CGPA}</strong></h1> 
                        <CGPAChart data={SGPAs} />
                </div>
            }

        </div>
        </>
    );
}