import { useState,useContext } from "react";
import Input from "./Input";
import { useHistory } from 'react-router-dom';
import { TracksContext } from "../context/TracksContext";

const Form = () => {
  const {addTrack} = useContext(TracksContext);
  const history = useHistory();
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

    addTrack({name,date,reminder})

    setReminder(false);
    setDate('');
    setName('');
    history.push('/');
  }


  return (
    <>
    <h2 className="text-xl text-center mb-10 font-bold">Add a new Iterinary</h2>
    <form className={`mb-0 space-y-6`}>
      
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
    </>
  );
};

export default Form;
