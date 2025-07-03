import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { AiTwotoneBoxPlot } from 'react-icons/ai';
import './cgpa.css'

const navigation = [
  { name: 'CGPA', href: 'cgpa' },
  { name: 'SGPA', href: '/sgpa' },
]
const cardData=[
  {imgUrl:"M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",heading:"Calculates SGPA & CGPA",para:"Instantly compute your CGPA and SGPA with ease."},
  {imgUrl:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",heading:"Graphical Progress",para:"Visual charts help you track your academic performance over time."},
  {imgUrl:"M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z",heading:"Clean User Interface",para:"Minimal, distraction-free design optimized for mobile and desktop."},

]

export default function Example() {
  const navigate=useNavigate();
    return (
  <div>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative flex items-center justify-between p-4 sm:px-6 lg:px-8 backdrop-blur-md">
              <div className="flex lg:flex-1">
                <a href="" className="-m-1.5 p-1.5">
                  <button className='absolute top-[10px] left-[10px] font-bold text-white  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition flex items-center gap-3 rounded-full p-2 w-13' onClick={()=>navigate("/")}><AiTwotoneBoxPlot /></button>

                </a>
              </div>

            
            <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-x-6 lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} className="text-base text-white hover:text-yellow-200 transition hover:cursor-pointer" onClick={()=>navigate(item.href)}>
                {item.name} 
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
            <a href="https://github.com/nameispuneeth" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaGithub/>
            </a>
            <a href="https://x.com/nameizpuneeth" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaXTwitter/>
            </a>
          </div>
        </div>
      </nav>
      
    </header>

    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 transparent-box">
        <div className="mb-6 flex justify-center">
          <div className="relative rounded-full px-4 py-1 text-sm text-yellow-200 border-2 border-white-400 transition">
           <p className='font-light'>🏅 Track your semester-wise & cumulative CGPA easily!</p>
            </div>

        </div>

        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#1c7265] to-[#d27c33] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] mb-10">
            GPA Calculator
            </h1>


            <p className="mt-10 text-base sm:text-lg text-white font-light">
            Calculate your semester-wise GPA and get an accurate cumulative CGPA in one place. 
            Plan your academics better with real-time grade tracking and performance insights.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
            className="rounded-full bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg  text-white backdrop-blur-md shadow-md hover:bg-white/30 hover:shadow-lg hover:shadow-yellow-300/30 transition duration-300" onClick={()=>navigate('/gotocgpa')}
            >
            Use Calculator
            </a>
            </div>

        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
    
    <div className='grid justify-center items-center'>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
             {
      cardData.map((item)=>(
          <div className="card-box bg-white/10 text-white backdrop-blur-lg p-6 rounded-xl shadow-md text-center space-y-1" key="{item.imgUrl}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d={item.imgUrl}/>
            </svg>

          <h5 className="text-xl font-bold mb-0" key={item.heading}>{item.heading}</h5>
          <p className="text-sm leading-relaxed font-light mt-0" key={item.para}>
            {item.para}
          </p>
      </div>
      ))
    }
      </div>
    </div>
    <p className='text-sm text-center text-white mt-7 mb-3 font-medium'>Made With ❤️ By Puneeth</p>
  </div>
)

}