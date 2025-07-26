import React, { useState } from "react";
import styled from "styled-components";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: all ${(props) => props.theme.transitions.normal};
  backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.colors.background}f0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0 ${(props) => props.theme.spacing.lg};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 ${(props) => props.theme.spacing.xl};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSize["3xl"]};
  }
`;

const LogoText = styled.span`
  &.primary {
    color: ${(props) => props.theme.colors.primary};
  }

  &.secondary {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: color ${(props) => props.theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.primary};
    transition: width ${(props) => props.theme.transitions.fast};
  }

  &:hover:after {
    width: 100%;
  }
`;

const DesktopActions = styled.div`
  display: none;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text.secondary};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: all ${(props) => props.theme.transitions.fast};

  &.outline {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text.primary};
    border: 1px solid ${(props) => props.theme.colors.border};

    &:hover {
      background-color: ${(props) => props.theme.colors.surface};
    }
  }

  &.primary {
    background: ${(props) => props.theme.colors.gradient.primary};
    color: white;
    border: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${(props) => props.theme.shadows.lg};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: transparent;
  color: ${(props) => props.theme.colors.text.secondary};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: ${(props) => props.theme.spacing.md} 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;

const MobileNavLink = styled.a`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  transition: all ${(props) => props.theme.transitions.fast};
  border-radius: ${(props) => props.theme.borderRadius.md};

  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.surface};
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding-top: ${(props) => props.theme.spacing.md};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  margin-top: ${(props) => props.theme.spacing.md};
`;

const MobileButton = styled(Button)`
  text-align: left;
  justify-content: flex-start;
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigationItems = [
    { label: "Find Jobs", href: "#" },
    { label: "For Companies", href: "#" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          {/* Logo */}
          <Logo>
            <LogoText className="primary">Job</LogoText>
            <LogoText className="secondary">hunt</LogoText>
          </Logo>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navigationItems.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </DesktopNav>

          {/* Desktop Actions */}
          <DesktopActions>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </ThemeToggle>
            <Button className="outline">Login</Button>
            <Button className="primary">Register</Button>
          </DesktopActions>

          {/* Mobile Actions */}
          <MobileActions>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </ThemeToggle>
            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </MobileMenuButton>
          </MobileActions>
        </HeaderContent>

        {/* Mobile Menu */}
        <MobileMenu isOpen={mobileMenuOpen}>
          <MobileNavLinks>
            {navigationItems.map((item, index) => (
              <MobileNavLink
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileNavLinks>

          <MobileButtonContainer>
            <MobileButton className="outline">Login</MobileButton>
            <MobileButton className="primary">Register</MobileButton>
          </MobileButtonContainer>
        </MobileMenu>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
