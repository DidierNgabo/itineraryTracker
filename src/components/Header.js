import Button from "./Button"

const Header = ({clicked,handleClick}) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl capitalize">itinerary tracker</h1>
            <Button clicked={clicked} handleClick={handleClick}/>
        </div>
    )
}

export default Header
