const Track = ({data,removeTrack,updateTrack}) => {
    const {name,date,reminder} = data;
    return (
        <div onDoubleClick={()=>updateTrack(data.id)} className={`mt-4 flex justify-between items-center ${reminder ? 'border-l-4  border-green-700':''} p-3 bg-gray-200`}>
            <div>
            <h2 className="font-semibold">{name}</h2>
            <h3 className="text-base font-normal">{date}</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>removeTrack(data.id)} className="h-6 text-red-500 font-bold w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
        </div>
    )
}

export default Track
