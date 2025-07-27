/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.text.primary};
  color: white;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  .title {
    font-size: ${props => props.theme.fontSize.lg};
    font-weight: ${props => props.theme.fontWeight.semibold};
    margin-bottom: ${props => props.theme.spacing.md};
    color: white;
  }
`;

const BrandSection = styled(FooterSection)`
  .logo {
    font-size: ${props => props.theme.fontSize['2xl']};
    font-weight: ${props => props.theme.fontWeight.bold};
    margin-bottom: ${props => props.theme.spacing.md};
    
    .primary {
      color: ${props => props.theme.colors.primary};
    }
    
    .secondary {
      color: ${props => props.theme.colors.secondary};
    }
  }
  
  .description {
    color: #d1d5db;
    margin-bottom: ${props => props.theme.spacing.lg};
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
    color: #d1d5db;
    font-size: ${props => props.theme.fontSize.sm};
    
    .icon {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #374151;
  color: #d1d5db;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  a {
    color: #d1d5db;
    font-size: ${props => props.theme.fontSize.sm};
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover {
      color: white;
    }
  }
`;

const Newsletter = styled.div`
  .newsletter-input {
    display: flex;
    gap: ${props => props.theme.spacing.sm};
    margin-top: ${props => props.theme.spacing.md};
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  }
  
  input {
    flex: 1;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    background-color: #374151;
    border: 1px solid #4b5563;
    border-radius: ${props => props.theme.borderRadius.md};
    color: white;
    font-size: ${props => props.theme.fontSize.sm};
    
    &::placeholder {
      color: #9ca3af;
    }
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  button {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.gradient.primary};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius.md};
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSize.sm};
    transition: all ${props => props.theme.transitions.fast};
    white-space: nowrap;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  font-size: ${props => props.theme.fontSize.sm};
  text-align: center;
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  
  a {
    color: #d1d5db;
    font-size: ${props => props.theme.fontSize.sm};
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  const jobSeekerLinks = [
    { label: "Browse Jobs", href: "#" },
    { label: "Career Advice", href: "#" },
    { label: "Resume Builder", href: "#" },
    { label: "Salary Guide", href: "#" },
    { label: "Job Alerts", href: "#" }
  ];

  const employerLinks = [
    { label: "Post Jobs", href: "#" },
    { label: "Search Resumes", href: "#" },
    { label: "Pricing Plans", href: "#" },
    { label: "Enterprise Solutions", href: "#" },
    { label: "Recruitment Services", href: "#" }
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Help Center", href: "#" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription');
    // Handle newsletter subscription
  };

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
              Find your dream job with the best companies worldwide. We connect talented professionals with amazing opportunities.
            </p>
            
            <ContactInfo>
              <div className="contact-item">
                <FiMapPin className="icon" size={16} />
                <span>123 Business Street, Suite 100, City, State 12345</span>
              </div>
              <div className="contact-item">
                <FiPhone className="icon" size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FiMail className="icon" size={16} />
                <span>contact@jobhunt.com</span>
              </div>
            </ContactInfo>

            <SocialLinks>
              <SocialLink aria-label="Facebook">
                <FiFacebook size={20} />
              </SocialLink>
              <SocialLink aria-label="Twitter">
                <FiTwitter size={20} />
              </SocialLink>
              <SocialLink aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </SocialLink>
              <SocialLink aria-label="Instagram">
                <FiInstagram size={20} />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          {/* Job Seekers Links */}
          <FooterSection>
            <h3 className="title">For Job Seekers</h3>
            <FooterLinks>
              {jobSeekerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>

          {/* Employers Links */}
          <FooterSection>
            <h3 className="title">For Employers</h3>
            <FooterLinks>
              {employerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
          </FooterSection>

          {/* Company Links & Newsletter */}
          <FooterSection>
            <h3 className="title">Company</h3>
            <FooterLinks>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinks>
            
            <Newsletter>
              <h4 className="title" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
                Stay Updated
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                Get the latest job opportunities delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </Newsletter>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            &copy; 2025 JobHunt. All rights reserved.
          </Copyright>
          
          <LegalLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;