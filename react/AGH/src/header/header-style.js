import styled from 'styled-components';

export const HeaderContainer = styled.header`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #0f0f0f;
}

/* NAVBAR */
.navbar {
  height: 70px;
  width: 100%;
  background: linear-gradient(to right, #0c0c0c, #1a1a1a);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

/* LOGO */
.logo {
  height: 40px;
  cursor: pointer;
}

/* CENTER MENU */
.nav-center {
  display: flex;
  gap: 30px;
}

.nav-center a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  position: relative;
  transition: color 0.3s;
}

.nav-center a:hover {
  color: #00ffd5;
}

/* Hover underline animation */
.nav-center a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -6px;
  background-color: #00ffd5;
  transition: width 0.3s;
}

.nav-center a:hover::after {
  width: 100%;
}

/* RIGHT SIDE */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cart {
  font-size: 22px;
  color: white;
  cursor: pointer;
}
.cart:hover {
transform: scale(1.1);
}

/* LOGIN BUTTON */
.login-btn {
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  background: #2b2b2b;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

`;