import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const Header = () => {
  const { language, setLanguage } = useLanguage(); 

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'Georgian' ? 'English' : 'Georgian');
  };

  return (
    <header>
      <button onClick={toggleLanguage}>
        Current Language is {language}
      </button>
      <Link style={{ marginLeft: "10px", marginRight: "10px" }} to={'/'}>
        Main Page
      </Link>
      <Link to={'/edit'}>
        Edit Page
      </Link>
    </header>
  );
};

export default Header;