import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const nav = useNavigate();

    //사용자 상태에 따라서 profile 클릭시 이동하는 페이지 다르게 분리 (로그인/사용자마이페이지/관리자마이페이지)

    return(
        <div className="Header">
            <div className="Header-content">
                <img className="logo" src="./LOGO.png" onClick={()=>nav('/')}/>
                <img className="profile" src="./profile.svg"/>
            </div>
        </div>
    );
}

export default Header