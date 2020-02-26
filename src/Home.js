import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import logo from './icon.png'
import bg from './bg.png'



function Home() {
  return (
    <div className="home-container" style={{fontFamily:"Source Sans Pro"}}>
      <div className="white">
        <img src={logo} alt=""/>
        <p>ผลงานจากการวิจัย</p>
        <p>โดย</p>
        <p>นิสิตชั้นปีที่​ 4 สาขาวิชาภาษาฝรั่งเศส​เพื่อการสื่อสาร​</p>
        <p>คณะมนุษศาสตร์​และสังคมศาสตร์​ มหาวิทยาลัยบูรพา</p>
        <p>59021083 นางสาวเวทิตา​ ศรภักดี</p>
        <p>59021086​ นางสาวสิริกาญจน์​ ผลสุข</p>
        <p>59021089 นางสาวอดิ​ชญา​ ศุขประเสริฐ</p>
        <p>ผู้ผลิตแอพพลิเคชั่น aisukdl.</p>
        <Link to="/category"><center><div className="start" style={{color:"#fff"}}><h2>เริ่มต้นใช้งาน</h2></div></center></Link>
      </div>
    </div>
  );
}

export default Home;