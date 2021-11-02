import { useHistory } from 'react-router';
const About = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div className="mt-12 text-center">
      <p>
        this is a simple application which keeps notes of your tracks made using
        create-react-app and strapi cms
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
