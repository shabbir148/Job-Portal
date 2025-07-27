import React from 'react';
import styled from 'styled-components';
import { Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  padding: 3rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const BrandSection = styled.div`
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    
    .primary {
      color: #7c3aed;
    }
    
    .secondary {
      color: #f97316;
    }
  }
  
  .description {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const FooterSection = styled.div`
  .title {
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: #6b7280;
    font-size: 0.875rem;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #7c3aed;
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    
    .icon {
      color: #7c3aed;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }
    
    span {
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 3rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TermsLink = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  color: #9ca3af;
  transition: color 0.2s;
  
  &:hover {
    color: #7c3aed;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact Us", href: "#" }
  ];

  const legalLinks = [
    { label: "Terms of use", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Complaints", href: "#" }
  ];

  const followUsLinks = [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Youtube", href: "#" }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          {/* Brand Section */}
          <BrandSection>
            <div className="logo">
              <span className="primary">Job</span>
              <span className="secondary">hunt</span>
            </div>
            <p className="description">
              JobHunt offers a great opportunity and a registry of job. 
              Come into our platform and see the quick job 
              board wise candidates - an asset job, to meet their 
              requirements - and that too in a time effective manner.
            </p>
          </BrandSection>

          {/* Quick Links */}
          <FooterSection>
            <h3 className="title">Quick links</h3>
            <FooterLinks>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>

          {/* Legal */}
          <FooterSection>
            <h3 className="title">Legal</h3>
            <FooterLinks>
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>

          {/* Follow Us */}
          <FooterSection>
            <h3 className="title">Follow Us</h3>
            <FooterLinks>
              {followUsLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>

          {/* Contact Us */}
          <FooterSection>
            <h3 className="title">Contact Us</h3>
            <ContactInfo>
              <div className="contact-item">
                <Phone className="icon" size={16} />
                <span>+44(0) 345-0912</span>
              </div>
              <div className="contact-item">
                <MapPin className="icon" size={16} />
                <span>
                  1527 Washington Ave<br />
                  Manchester, Kentucky 39495
                </span>
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        {/* Bottom Section */}
        <FooterBottom>
          <Copyright>© Copyright 2024 Jobhunt - All Rights Reserved</Copyright>
          
          <BottomRight>
            <TermsLink>Terms & Condition</TermsLink>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <Youtube />
              </SocialLink>
            </SocialLinks>
          </BottomRight>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;