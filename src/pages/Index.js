import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Tracks from '../components/Tracks';

const Index = () => {
  const [tracks, setTracks] = useState([]);
  const [clicked, setClicked] = useState(false);

  // function to get all tracks
  const getData = async () => {
    const response = await axios.get('http://localhost:1337/tracks');
    return response.data;
  };

  useEffect(() => {
    const populateState = async () =>{
      const dataFromServer = await  getData();
      setTracks(dataFromServer);
    }
    populateState();
  },[]);

  // function to add new track
  const addTrack = async ({ name, date, reminder }) => {
    console.log(reminder);
    const data = { name, date, reminder };
    const res = await axios.post('http://localhost:1337/tracks', data);
    setTracks([...tracks, res.data]);
  };

  //function to fetch one track

  const getTrack =  async(id) =>{
    const response = await axios.get(`http://localhost:1337/tracks/${id}`);

    return response.data;
  }

  //function to update track
  const updateTrack = async (id) =>{
    const trackToUpdate =await getTrack(id);
    const updTask = {...trackToUpdate,reminder:!trackToUpdate.reminder}
     const res = await axios.put(`http://localhost:1337/tracks/${id}`,updTask);
     setTracks(
       tracks.map((track) => track.id === id ? {...track,reminder:res.data.reminder} : track)
     );
  }
  // function to delete track
  const removeTrack = async (id) => {
    const res = await axios.delete(`http://localhost:1337/tracks/${id}`);
    setTracks(tracks.filter((track) => track.id !== res.data.id));
    console.log(tracks);
  };
  return (
    <div>
      <Header
        handleClick={() => {
          setClicked(!clicked);
        }}
        clicked={clicked}
      />
      <Form show={clicked} createTrack={addTrack} />
      {tracks && <Tracks tracks={tracks} removeTrack={removeTrack} updateTrack={updateTrack} />}
      {tracks.length === 0 && <h2 className="font-semibold text-lg text-center">No tracks to show</h2> }
      <Footer />
    </div>
  );
};

export default Index;
