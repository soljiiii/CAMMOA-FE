import Search from "../../components/main-camplist-res/Search";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./Main.css";

const Main = () => {
    return(
        <div className="Main">
            <Header/>
                <div className="main-container">
                    <div className="main-banner">
                        <span className="main-search-title">어디로 떠나볼까요?</span>
                        <div className="main-search">
                            <Search/>
                        </div>
                    </div>
                    <div className="main-body">
                        <section className="main-event">
                            <span>이벤트</span>
                        </section>
                        <section className="main-theme">
                            <span>테마 추천</span>
                        </section>
                        <section className="main-adv">
                            <span>이런 캠핑장 어때요? ⛺</span>
                        </section>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Main