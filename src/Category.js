import React from 'react';
import './Category.css'
import {Link} from 'react-router-dom';
function Category() {
    return (
      <div className="container">
          <div className="category-container">
                <div className="vertical-container">
                    <div className="horizontal-container">
                    <Link to="/diceases">
                      <div className="box">
                      <p>โรคและอาการไม่สบาย</p>
                      </div>
                    </Link>
                    <Link to="/departments">
                      <div className="box">
                        <p>ชื่อแผนกและห้องตรวจ</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/head">
                      <div className="box">
                        <p>อวัยวะส่วนหัวและใบหน้า</p>
                      </div>
                    </Link>
                    <Link to="/upperorgan">
                      <div className="box">
                        <p>อวัยวะส่วนบน</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/lowerorgan">
                      <div className="box">
                        <p>อวัยวะส่วนล่าง</p>
                      </div>
                    </Link>
                    <Link to="/eye">
                      <div className="box">
                        <p>ส่วนต่างๆของดวงตา</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/innerorgan">
                      <div className="box">
                        <p>อวัยวะภายในร่างกาย</p>
                      </div>
                    </Link>
                    <Link to="/bones">
                      <div className="box">
                        <p>กระดูกในร่างกาย</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/liquids">
                      <div className="box">
                        <p>ของเหลวในร่างกาย</p>
                      </div>
                    </Link>
                    <Link to="/person">
                      <div className="box">
                        <p>ผู้ป่วยและบุคลากรทางการแพทย์</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/equipment">
                      <div className="box">
                        <p>ยาและอุปกรณ์การแพทย์</p>
                      </div>
                    </Link>
                    <Link to="/insurance">
                      <div className="box">
                        <p>ประกันภัย</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/avoir">
                      <div className="box">
                        <p>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา avoir</p>
                      </div>
                    </Link>
                    <Link to="/être">
                      <div className="box">
                        <p>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา être</p>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/ache">
                      <div className="box">
                        <p>สำนวนที่ใช้บอกอาการเจ็บปวดอวัยวะต่างๆ</p>
                      </div>
                    </Link>
                    <Link to="/allergy">
                      <div className="box">
                        <p>สำนวนที่ใช้บอกอาการภูมิแพ้ต่างๆ</p>
                      </div>
                    </Link>
                    </div>
                </div>
          </div>
            <div className="menu">
                <i className="fas fa-search fa-2x"></i>
                <i className="fas fa-volume-up fa-2x"></i>
                <i className="fas fa-cog fa-2x"></i>
            </div>
      </div>
    );
  }
  
  export default Category;
  