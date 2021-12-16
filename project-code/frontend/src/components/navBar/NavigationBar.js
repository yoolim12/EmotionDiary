import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavigationBar.scss"
import { logoutDB } from "../../login/LoginValidation";
import { connect } from 'react-redux';

const NavigationBar = ({ Login }) => {
  const navigate = useNavigate();
  const activeStyle = {
    width: "120px",
    left: "-20px",
    backgroundColor: "#f0bb62"
  }
  return (
    <>
      <div className="navigation">
        <NavLink className="menuBar" to={Login.login.is_login ? "/calendar" : "/login"}
          style={({ isActive }) =>
            isActive ?
              Login.login.is_login ? activeStyle : undefined
              : undefined}>
          <a className="navlink">달력</a>
        </NavLink>
        <div className="space"></div>

        <NavLink className="menuBar" to={Login.login.is_login ? "/diary-write" : "/login"}
          style={({ isActive }) =>
            isActive ?
              Login.login.is_login ? activeStyle : undefined
              : undefined}>
          <a className="navlink">일기</a>
        </NavLink>
        <div className="space"></div>

        <NavLink className="menuBar" to={Login.login.is_login ? "/flowerlist" : "/login"}
          style={({ isActive }) =>
            isActive ?
              Login.login.is_login ? activeStyle : undefined
              : undefined}>
          <a className="navlink">꽃무리</a>
        </NavLink>
        <div className="space"></div>


        <NavLink className="menuBar" to="/moreAbout"
          style={({ isActive }) => isActive ? activeStyle : undefined}>
          <a className="navlink">About Us</a>
        </NavLink>
        <div className="space"></div>

        {
          Login.login.is_login ?
            <NavLink className="menuBar" to="/"
              style={({ isActive }) => isActive ? activeStyle : undefined} onClick={() => logoutDB(navigate)}>
              <a className="navlink">logout</a>
            </NavLink>
            : <NavLink className="menuBar" to="/login"
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">login</a>
            </NavLink>
        }


        {/* <NavLink className="menuBar" to="/team" 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              <a className="navlink">Team</a>
              </NavLink>
            <div className="space"></div> */}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { Login: state };
}
export default connect(mapStateToProps)(NavigationBar);
