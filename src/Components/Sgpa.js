import { useState } from 'react';
import './cgpa.css';
import { AiTwotoneBoxPlot } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function SubjecterInput() {
  const navigate=useNavigate();
  const [Subjects, setSubjects] = useState([{ grade: 'Ex', credits: 4 },{ grade: 'Ex', credits: 4 }]);
  const [Sgpa, setSgpa] = useState(null);

  const handleIncrement = () => {
    if (Subjects.length < 10){
      setSubjects([...Subjects, { grade: 'Ex', credits: 4 }]);
      setSgpa(null);
    }
  };

  

  const handleDecrement = () => {
    if (Subjects.length > 1) {
      const updated = [...Subjects];
      updated.pop();
      setSubjects(updated);
            setSgpa(null);

    }
  };

  const handleGradeChange = (index, value) => {
    const updated = [...Subjects];
    updated[index].grade = value;
          setSgpa(null);

    setSubjects(updated);
  };

  const handleCreditChange = (index, value) => {
    const updated = [...Subjects];
    updated[index].credits = parseFloat(value);
          setSgpa(null);

    setSubjects(updated);
  };

  const findVal = (grade) => {
    switch (grade) {
      case 'Ex': return 10;
      case 'A': return 9;
      case 'B': return 8;
      case 'C': return 7;
      case 'D': return 6;
      case 'E': return 5;
      default: return 0;
    }
  };

  const findSGPA = () => {
    let numerator = 0;
    let denominator = 0;
    Subjects.forEach(sub => {
      const gradeValue = findVal(sub.grade);
      numerator += gradeValue * sub.credits;
      denominator += sub.credits * 10;
    });
    const sgpa = (numerator / denominator) * 10;
    setSgpa(sgpa.toFixed(2));
  };

  return (
    <div className="transparent-box text-white">
      <button className='absolute top-[10px] left-[10px] font-bold text-white  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition flex items-center gap-3 rounded-full p-2 w-13' onClick={()=>navigate("/")}><AiTwotoneBoxPlot /></button>
      <form className="max-w-md mx-auto mb-6">
        <label className="block mb-2 text-lg font-semibold">
          Select Number of Subjects (1–10)
        </label>
        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={handleDecrement}
            className="h-8 w-8 rounded-md bg-white/20 text-white hover:bg-white/30 text-xl font-bold"
          >
            −
          </button>
          <span className="text-xl font-semibold">{Subjects.length}</span>
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
        {Subjects.map((sub, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl shadow-md backdrop-blur-md">
            <h3 className="text-lg font-bold mb-2">Subject {i + 1}</h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Grade</label>
                <select
                  className="w-full px-3 py-2 rounded-md bg-white/20 text-white focus:outline-none"
                  value={sub.grade}
                  onChange={(e) => handleGradeChange(i, e.target.value)}
                >
                  <option value="Ex" className="text-black">EX</option>
                  <option value="A" className="text-black">A</option>
                  <option value="B" className="text-black">B</option>
                  <option value="C" className="text-black">C</option>
                  <option value="D" className="text-black">D</option>
                  <option value="E" className="text-black">E</option>
                    <option value="F" className="text-black">F</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-medium">Credits</label>
                <select
                  className="w-full px-3 py-2 rounded-md bg-white/20 text-white focus:outline-none"
                  value={sub.credits}
                  onChange={(e) => handleCreditChange(i, e.target.value)}
                >
                  <option value="4" className="text-black">4</option>
                  <option value="3.5" className="text-black">3.5</option>
                  <option value="3" className="text-black">3</option>
                  <option value="2.5" className="text-black">2.5</option>
                  <option value="2" className="text-black">2</option>
                  <option value="1.5" className="text-black">1.5</option>
                  <option value="1" className="text-black">1</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

       <button className="w-full px-3 py-2 rounded-md bg-white/20 text-white focus:outline-none mt-10 mb-10 font-semibold" onClick={()=>findSGPA()}>Generate SGPA</button>
        {Sgpa && <h1 className='font-bold text-lg' >Your Semester Grade Point Average is {Sgpa}</h1>}
    </div>
  );
}
