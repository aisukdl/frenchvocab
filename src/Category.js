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
                      <h2>โรคและอาการไม่สบาย</h2>
                      <h3>Maladie</h3>
                      </div>
                    </Link>
                    <Link to="/category/departments">
                      <div className="box">
                        <h2>ชื่อแผนกและห้องตรวจ</h2>
                        <h3>Département et salle d’hôpital</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/head">
                      <div className="box">
                        <h2>อวัยวะส่วนหัวและใบหน้า</h2>
                        <h3>Organes de la tête et du visage</h3>
                      </div>
                    </Link>
                    <Link to="/category/upperorgan">
                      <div className="box">
                        <h2>อวัยวะส่วนบน</h2>
                        <h3>Organes du haut</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/lowerorgan">
                      <div className="box">
                        <h2>อวัยวะส่วนล่าง</h2>
                        <h3>Organes plus bas</h3>
                      </div>
                    </Link>
                    <Link to="/category/eye">
                      <div className="box">
                        <h2>ส่วนต่างๆของดวงตา</h2>
                        <h3>Anatomie de l’œil</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/innerorgan">
                      <div className="box">
                        <h2>อวัยวะภายในร่างกาย</h2>
                        <h3>Organes dans le corps</h3>
                      </div>
                    </Link>
                    <Link to="/category/bones">
                      <div className="box">
                        <h2>กระดูกในร่างกาย</h2>
                        <h3>Squelette</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/liquids">
                      <div className="box">
                        <h2>ของเหลวในร่างกาย</h2>
                        <h3>Liquide dans le corps</h3>
                      </div>
                    </Link>
                    <Link to="/category/person">
                      <div className="box">
                        <h2>ผู้ป่วยและบุคลากรทางการแพทย์</h2>
                        <h3>Patient et personnels Médicaux</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/equipment">
                      <div className="box">
                        <h2>ยาและอุปกรณ์การแพทย์</h2>
                        <h3>Médicaments et outils Médicaux</h3>
                      </div>
                    </Link>
                    <Link to="/category/insurance">
                      <div className="box">
                        <h2>ประกันภัย</h2>
                        <h3>Assurance</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/avoir">
                      <div className="box">
                        <h2>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา avoir</h2>
                        <h3>Expression d’exprimer des maladies (Avoir)</h3>
                      </div>
                    </Link>
                    <Link to="/category/être">
                      <div className="box">
                        <h2>สำนวนที่ใช้บอกอาการที่ใช้กับกริยา être</h2>
                        <h3>Expression d’exprimer des maladies (Être)</h3>
                      </div>
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/category/ache">
                      <div className="box">
                        <h2>สำนวนที่ใช้บอกอาการเจ็บปวดอวัยวะต่างๆ</h2>
                        <h3>Expression d’exprimer le malheur des organes</h3>
                      </div>
                    </Link>
                    <Link to="/category/allergy">
                      <div className="box">
                        <h2>สำนวนที่ใช้บอกอาการภูมิแพ้ต่างๆ</h2>
                        <h3>Expression d’exprimer des allergies</h3>
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
  