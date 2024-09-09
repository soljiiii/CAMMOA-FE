import { Route, Routes } from "react-router-dom";
import ManagerReservationList from "../pages/manager/ManagerReservationList"
import ManagerReview from "../pages/manager/ManagerReview"
import ManagerChatList from "../pages/manager/ManagerChatList"
import ModifyManager from "../pages/manager/ModifyManager"
import DeleteManager from "../pages/manager/DeleteManager"


const ManagerRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/reservationlist" element={<ManagerReservationList/>}/>
                <Route path="/review" element={<ManagerReview/>}/>
                <Route path="/chatlist" element={<ManagerChatList/>}/>
                <Route path="/modify" element={<ModifyManager/>}/>
                <Route path="/delete" element={<DeleteManager/>}/>
            </Routes>
        </>
    );
}

export default ManagerRoutes