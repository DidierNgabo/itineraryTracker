import { useState } from "react";
import Input from "./Input";

const Form = ({show,createTrack}) => {
  const [name,setName] = useState('');
  const [date,setDate] = useState('');
  const [reminder,setReminder] = useState(false);

  
  const handleChange = (target) =>{
    if(target.name === 'name'){
         setName(target.value);
    }
    if(target.name === 'date'){
      setDate(target.value);
 }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    createTrack({name,date,reminder})

    setReminder(false);
    setDate('');
    setName('')
  }


  return (
    <form className={`${show ? "":"hidden"} mb-0 space-y-6`}>
      
     <Input id="name" name="name" handleChange={handleChange} value={name} label="name"/>
     
      <Input id="date" name="date" handleChange={handleChange} value={date} label="Date & time" />

      <div className="mt-1 flex justify-evenly items-start">
        <label htmlFor="track" className="inline form-label">
          set Reminder
        </label>
          <input type="checkbox" className="inline" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} id="track" name="reminder" required />
      </div>
      <button type="submit" onClick={handleSubmit} className="form-btn">Submit</button>
    </form>
  );
};

export default Form;
