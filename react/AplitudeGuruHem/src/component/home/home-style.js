import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo img {
    height: 40px;
    width: auto;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    
    span {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 3px 0;
      transition: 0.3s;
    }
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;

    li a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: #007bff;
      }
    }
  }

  .shop {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
      opacity: ${props => props.isOpen ? '1' : '0'};
      visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
      transition: all 0.3s ease;
    }
  }
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-content {
    max-width: 800px;
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .hero-content p {
      font-size: 1rem;
    }
  }
`;

export const CoursesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }
  
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .workshop-content {
    text-align: center;
    
    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #666;
    }
  }
`;

export const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 1.5rem;
  }
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .footer-section {
    h4 {
      margin-bottom: 1rem;
      color: #007bff;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.5rem;
        
        a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
          
          &:hover {
            color: white;
          }
        }
      }
    }
    
    p {
      color: #ccc;
      line-height: 1.6;
    }
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #555;
    color: #ccc;
  }
`;

export const LoginBtn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: ${props => props.size === 'large' ? '1rem 2rem' : '0.5rem 1rem'};
  font-size: ${props => props.size === 'large' ? '1.1rem' : '1rem'};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;