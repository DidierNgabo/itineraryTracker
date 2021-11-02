import Track from "./Track"

const Tracks = ({tracks,removeTrack,updateTrack}) => {
    return (
        <div className="">
            {
        tracks.map((track)=>(
            <Track key={track.id} data={track} updateTrack={updateTrack}  removeTrack={removeTrack} />
        ))
    }
        </div>
    )
}

export default Tracks
