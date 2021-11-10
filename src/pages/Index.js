import {useContext} from 'react';
import Tracks from '../components/Tracks';
import { TracksContext } from '../context/TracksContext';

const Index = () => {
  const {tracks} = useContext(TracksContext)
  return (
    <div>
      {tracks && <Tracks  />}
      {tracks.length === 0 && <h2 className="font-semibold text-lg text-center">No tracks to show</h2> }
    </div>
  );
};

export default Index;
