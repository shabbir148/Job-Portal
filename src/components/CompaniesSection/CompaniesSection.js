import React from 'react';
import styled from 'styled-components';
import { topCompanies } from '../../data/mockData';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  
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

const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CompanyCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary}40;
    
    &:before {
      left: 100%;
    }
  }
`;

const CompanyLogo = styled.div`
  font-size: ${props => props.theme.fontSize['3xl']};
  margin-bottom: ${props => props.theme.spacing.sm};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize['4xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

const CompanyName = styled.h3`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const CompanyDetail = styled.span`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.colors.text.secondary};
  
  &.jobs {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeight.medium};
  }
  
  &.rating {
    color: ${props => props.theme.colors.warning};
    font-weight: ${props => props.theme.fontWeight.medium};
  }
`;

const ViewAllButton = styled.button`
  display: block;
  margin: ${props => props.theme.spacing.xl} auto 0;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.base};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const StatsSection = styled.div`
  margin-top: ${props => props.theme.spacing.xxl};
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  border-radius: ${props => props.theme.borderRadius.xl};
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .icon {
    font-size: ${props => props.theme.fontSize['2xl']};
    margin-bottom: ${props => props.theme.spacing.sm};
    opacity: 0.9;
  }
  
  .number {
    font-size: ${props => props.theme.fontSize['2xl']};
    font-weight: ${props => props.theme.fontWeight.bold};
    margin-bottom: ${props => props.theme.spacing.xs};
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.fontSize['3xl']};
    }
  }
  
  .label {
    font-size: ${props => props.theme.fontSize.sm};
    opacity: 0.9;
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.fontSize.base};
    }
  }
`;

const CompaniesSection = () => {
  const handleCompanyClick = (company) => {
    console.log('Company clicked:', company);
    // Handle navigation to company page or jobs by company
  };

  const handleViewAll = () => {
    console.log('View all companies clicked');
    // Handle navigation to companies page
  };

  const stats = [
    {
      number: "50K+",
      label: "Jobs Available",
      icon: "💼"
    },
    {
      number: "12K+",
      label: "Companies",
      icon: "🏢"
    },
    {
      number: "1M+",
      label: "Candidates",
      icon: "👥"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: "🎯"
    }
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>Top Companies Hiring</SectionTitle>
          <SectionSubtitle>
            Join industry-leading companies and accelerate your career growth
          </SectionSubtitle>
        </SectionHeader>

        <CompaniesGrid>
          {topCompanies.map((company, index) => (
            <CompanyCard 
              key={index}
              onClick={() => handleCompanyClick(company)}
            >
              <CompanyLogo>{company.logo}</CompanyLogo>
              <CompanyName>{company.name}</CompanyName>
              <CompanyInfo>
                <CompanyDetail>{company.industry}</CompanyDetail>
                <CompanyDetail className="jobs">
                  {company.openJobs} open positions
                </CompanyDetail>
                <CompanyDetail className="rating">
                  ⭐ {company.rating}/5.0
                </CompanyDetail>
              </CompanyInfo>
            </CompanyCard>
          ))}
        </CompaniesGrid>

        <ViewAllButton onClick={handleViewAll}>
          View All Companies
        </ViewAllButton>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <div className="icon">{stat.icon}</div>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>
      </Container>
    </SectionContainer>
  );
};

export default CompaniesSection;