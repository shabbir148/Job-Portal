import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiDollarSign, FiArrowRight } from 'react-icons/fi';

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary}40;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.theme.colors.gradient.primary};
    transform: scaleX(0);
    transition: transform ${props => props.theme.transitions.normal};
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const CompanyLogo = styled.div`
  font-size: ${props => props.theme.fontSize['2xl']};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize['3xl']};
    width: 70px;
    height: 70px;
  }
`;

const JobTypeBadge = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: ${props => props.theme.fontWeight.medium};
  border-radius: ${props => props.theme.borderRadius.full};
  
  ${props => {
    if (props.type === 'Remote') {
      return `
        background-color: ${props.theme.colors.success}20;
        color: ${props.theme.colors.success};
      `;
    }
    return `
      background-color: ${props.theme.colors.primary}20;
      color: ${props.theme.colors.primary};
    `;
  }}
`;

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
  line-height: 1.3;
`;

const CompanyName = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-weight: ${props => props.theme.fontWeight.medium};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const JobLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSize.sm};
  
  .icon {
    margin-right: ${props => props.theme.spacing.xs};
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const SalaryInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSize.sm};
  
  .icon {
    margin-right: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.colors.text.muted};
  }
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSize.sm};
  transition: all ${props => props.theme.transitions.fast};
  padding: ${props => props.theme.spacing.xs} 0;
  
  .icon {
    margin-left: ${props => props.theme.spacing.xs};
    transition: transform ${props => props.theme.transitions.fast};
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    .icon {
      transform: translateX(4px);
    }
  }
`;

const JobCard = ({ job, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(job);
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardHeader>
        <CompanyLogo>
          {job.logo}
        </CompanyLogo>
        <JobTypeBadge type={job.type}>
          {job.type}
        </JobTypeBadge>
      </CardHeader>
      
      <JobTitle>{job.title}</JobTitle>
      <CompanyName>{job.company}</CompanyName>
      
      <JobLocation>
        <FiMapPin className="icon" size={16} />
        <span>{job.location}</span>
      </JobLocation>
      
      <CardFooter>
        <SalaryInfo>
          <FiDollarSign className="icon" size={16} />
          <span>{job.salary}</span>
        </SalaryInfo>
        
        <ApplyButton>
          Apply Now
          <FiArrowRight className="icon" size={16} />
        </ApplyButton>
      </CardFooter>
    </CardContainer>
  );
};

export default JobCard;