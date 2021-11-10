import { useState } from 'react';
import axios from 'axios';
import { TracksContext } from './TracksContext';

const TracksContextProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  // function to get all tracks
  const getData = async () => {
    const response = await axios.get('http://localhost:1337/tracks');
    return response.data;
  };

  // function to add new track
  const addTrack = async ({ name, date, reminder }) => {
    console.log(reminder);
    const data = { name, date, reminder };
    const res = await axios.post('http://localhost:1337/tracks', data);
    setTracks([...tracks, res.data]);
  };

  //function to fetch one track

  const getTrack = async (id) => {
    const response = await axios.get(`http://localhost:1337/tracks/${id}`);

    return response.data;
  };

  //function to update track
  const updateTrack = async (id) => {
    const trackToUpdate = await getTrack(id);
    const updTask = { ...trackToUpdate, reminder: !trackToUpdate.reminder };
    const res = await axios.put(`http://localhost:1337/tracks/${id}`, updTask);
    setTracks(
      tracks.map((track) =>
        track.id === id ? { ...track, reminder: res.data.reminder } : track
      )
    );
  };
  // function to delete track
  const removeTrack = async (id) => {
    const res = await axios.delete(`http://localhost:1337/tracks/${id}`);
    setTracks(tracks.filter((track) => track.id !== res.data.id));
    console.log(tracks);
  };

  const value = {
    tracks,
    setTracks,
    updateTrack,
    removeTrack,
    addTrack,
    getData,
  };

  return (
    <TracksContext.Provider value={value}>
      {props.children}
    </TracksContext.Provider>
  );
};

export default TracksContextProvider;
