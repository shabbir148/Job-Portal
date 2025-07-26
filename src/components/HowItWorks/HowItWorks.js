import React from 'react';
import styled from 'styled-components';
import { workStepsData } from '../../data/mockData';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.surface};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSize['2xl']};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize['3xl']};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StepCard = styled.div`
  text-align: center;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 4rem;
    right: -${props => props.theme.spacing.lg};
    width: ${props => props.theme.spacing.lg};
    height: 2px;
    background: ${props => props.theme.colors.gradient.primary};
    opacity: 0.3;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all ${props => props.theme.transitions.normal};
  border: 3px solid transparent;
  background-clip: padding-box;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: ${props => props.color ? `linear-gradient(135deg, ${props.color}, ${props.color}80)` : props.theme.colors.gradient.primary};
    border-radius: ${props => props.theme.borderRadius.xl};
    z-index: -1;
    opacity: 0;
    transition: opacity ${props => props.theme.transitions.normal};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    
    &:before {
      opacity: 1;
    }
  }
  
  .icon {
    font-size: ${props => props.theme.fontSize['2xl']};
  }
`;

const StepBadge = styled.div`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: ${props => props.theme.fontWeight.semibold};
  margin-bottom: ${props => props.theme.spacing.sm};
  letter-spacing: 0.5px;
`;

const StepTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StepDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  font-size: ${props => props.theme.fontSize.sm};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize.base};
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing.xxl};
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  border-radius: ${props => props.theme.borderRadius.xl};
  color: white;
`;

const CTATitle = styled.h3`
  font-size: ${props => props.theme.fontSize['2xl']};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CTADescription = styled.p`
  font-size: ${props => props.theme.fontSize.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  opacity: 0.9;
`;

const CTAButton = styled.button`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background-color: white;
  color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.base};
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const HowItWorks = () => {
  const handleGetStarted = () => {
    console.log('Get started clicked');
    // Handle navigation to registration/signup
  };

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>
            Get hired in 4 easy steps and start your dream career journey
          </SectionSubtitle>
        </SectionHeader>

        <StepsGrid>
          {workStepsData.map((step, index) => (
            <StepCard key={index}>
              <StepBadge>STEP {step.step}</StepBadge>
              
              <IconContainer color={step.color}>
                <span className="icon">{step.icon}</span>
              </IconContainer>
              
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>

        <CTASection>
          <CTATitle>Ready to Start Your Journey?</CTATitle>
          <CTADescription>
            Join thousands of job seekers who found their dream careers through our platform
          </CTADescription>
          <CTAButton onClick={handleGetStarted}>
            Get Started Now
          </CTAButton>
        </CTASection>
      </Container>
    </SectionContainer>
  );
};

export default HowItWorks;