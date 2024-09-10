import "./Footer.css"

const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-content">
                <img className="logo" src="./LOGO-green.png"/>
                <div className="info">
                    <div className="nav">
                        <p>회사소개 |&nbsp;</p>
                        <p>이용약관 |&nbsp;</p>
                        <p>고객센터 |&nbsp;</p>
                        <p>공지사항 |&nbsp;</p>
                        <p>자주 묻는 질문 |&nbsp;</p>
                        <p>개인정보처리방침</p>
                    </div>
                    <div className="corp">
                        <p>
                            (주)쫀드기컴퍼니<br/>
                            주소 : 서울특별시 강남구 테헤란로 7길7 에스코빌딩 5,6,7층 | 대표이사:김현식 | 사업자등록번호:123-45-6789<br/>
                            TEL 02-561-1911 | FAX 02-538-2613
                        </p>
                        <p>COPYRIGHT ⓒ ZZONDIGI CORP. ALL RIGHT RESERVED. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer