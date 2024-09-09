import { Routes,Route } from  "react-router-dom";
import UserProfile from "../pages/user/UserProfile"
import UserReservationList from "../pages/user/UserReservationList"
import FavoriteCampList from "../pages/user/FavoriteCampList"
import UserChatList from "../pages/user/UserChatList"
import UserReview from "../pages/user/UserReview"
import ModifyUser from "../pages/user/ModifyUser"
import DeleteUser from "../pages/user/DeleteUser"

const UserRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/profile" element={<UserProfile/>}/>
                <Route path="/reservationlist" element={<UserReservationList/>}/>
                <Route path="/favoritecamplist" element={<FavoriteCampList/>}/>
                <Route path="/chatlist" element={<UserChatList/>}/>
                <Route path="/review" element={<UserReview/>}/>
                <Route path="/modify" element={<ModifyUser/>}/>
                <Route path="/delete" element={<DeleteUser/>}/>

            </Routes>
        </>
    );
}

export default UserRoutes