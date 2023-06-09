import "./index.scss";
import linkedinLogo from "../../../assets/linkedinLogo.png";
import user from "../../../assets/userIcon.png";
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";

export default function Topbar() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={linkedinLogo} alt="linkedinLogo" />
      <div className="react-icons">
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div>
      <img className="user-logo" src={user} alt="user" />
    </div>
  );
}
