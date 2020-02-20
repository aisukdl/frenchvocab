import React from 'react';
import './Category.css'
import {Link} from 'react-router-dom';
function Category() {
    return (
      <div className="container">
          <div className="category-container">
                <div className="vertical-container">
                    <div className="horizontal-container">
                    <Link to="/Category">
                      <div className="box" />
                    </Link>
                    <Link to="/:Category">
                      <div className="box" />
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/:Category">
                      <div className="box" />
                    </Link>
                    <Link to="/:Category">
                      <div className="box" />
                    </Link>
                    </div>
                    <div className="horizontal-container">
                    <Link to="/:Category">
                      <div className="box" />
                    </Link>
                    <Link to="/:Category">
                      <div className="box" />
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
  