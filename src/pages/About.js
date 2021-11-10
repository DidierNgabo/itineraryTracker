import { useHistory } from 'react-router';
const About = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className="my-12 text-center">
      <p className="mt-10 font-mono font-semibold">
        this is a simple application which keeps notes of your tracks made using
        create-react-app,context api and strapi cms
      </p>
      <button
        className="p-2 bg-indigo-500 mt-5 text-white "
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default About;
