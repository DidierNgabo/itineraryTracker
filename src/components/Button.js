const Button = ({ clicked, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`px-3 py-2 ${
        clicked ? 'bg-red-500' : 'bg-indigo-500'
      }  text-white text-center text-xl uppercase font-light`}
    >
      {clicked ? 'Close' : 'Add'}
    </button>
  );
};

export default Button;
