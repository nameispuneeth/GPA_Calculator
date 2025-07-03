import './cgpa.css'
import { AiTwotoneBoxPlot } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
export default function GotoCGPA(){
    const navigate=useNavigate();
    return(
        <div className='h-dvh flex justify-center'>
            <button className='absolute top-[10px] left-[10px] font-bold text-white  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition flex items-center gap-3 rounded-full p-2 w-13' onClick={()=>navigate("/")}><AiTwotoneBoxPlot /></button>
            <div className="transparent-box">
                <h3 className='text-3xl sm:text-4xl lg:text-4xl font-extrabold bg-gradient-to-br from-[#1c7265] to-[#d27c33] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] mb-5' >What Do You Want to Use</h3>
                <button className="rounded-full bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg  text-white backdrop-blur-md shadow-md hover:bg-white/30 hover:shadow-lg hover:shadow-yellow-300/30 transition duration-300 m-10" onClick={()=>navigate('/sgpa')}>SGPA Calculator</button>
                <h5 className='text-center font-bold'>(OR)</h5>
                <button className="rounded-full bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg  text-white backdrop-blur-md shadow-md hover:bg-white/30 hover:shadow-lg hover:shadow-yellow-300/30 transition duration-300 m-10" onClick={()=>navigate("/cgpa")}>CGPA Calculator</button>
            </div>
        </div>

    );
}