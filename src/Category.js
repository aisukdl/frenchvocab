import React from 'react';
import './Category.css'
import {Link} from 'react-router-dom';
function Category() {
    return (
      <div className="container">
          <div className="category-container">
                <div className="vertical-container">
                    <div className="horizontal-container">
                    <Link to="/category/diceases">
                      <div className="box">
                      <h1>โรคและอาการไม่สบาย</h1>
                      </div>
                    </Link>
                    <Link to="/category/departments">
                      <div className="box">
                        <h1>ชื่อแผนกและห้องตรวจ</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/head">
                      <div className="box">
                        <h1>อวัยวะส่วนหัวและใบหน้า</h1>
                      </div>
                    </Link>
                    <Link to="/category/upperorgan">
                      <div className="box">
                        <h1>อวัยวะส่วนบน</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/lowerorgan">
                      <div className="box">
                        <h1>อวัยวะส่วนล่าง</h1>
                      </div>
                    </Link>
                    <Link to="/category/eye">
                      <div className="box">
                        <h1>ส่วนต่างๆของดวงตา</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/innerorgan">
                      <div className="box">
                        <h1>อวัยวะภายในร่างกาย</h1>
                      </div>
                    </Link>
                    <Link to="/category/bones">
                      <div className="box">
                        <h1>กระดูกในร่างกาย</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/liquids">
                      <div className="box">
                        <h1>ของเหลวในร่างกาย</h1>>
                      </div>
                    </Link>
                    <Link to="/category/person">
                      <div className="box">
                        <h1>ผู้ป่วยและบุคลากรทางการแพทย์</h1>>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/equipment">
                      <div className="box">
                        <h1>ยาและอุปกรณ์การแพทย์</h1>
                      </div>
                    </Link>
                    <Link to="/category/insurance">
                      <div className="box">
                        <h1>ประกันภัย</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/avoir">
                      <div className="box">
                        <h1>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา avoir</h1>
                      </div>
                    </Link>
                    <Link to="/category/être">
                      <div className="box">
                        <h1>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา être</h1>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/ache">
                      <div className="box">
                        <h1>สำนวนที่ใช้บอกอาการเจ็บปวดอวัยวะต่างๆ</h1>
                      </div>
                    </Link>
                    <Link to="/category/allergy">
                      <div className="box">
                        <h1>สำนวนที่ใช้บอกอาการภูมิแพ้ต่างๆ</h1>
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
  