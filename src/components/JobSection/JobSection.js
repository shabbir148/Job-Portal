import React, { useState } from 'react';
import styled from 'styled-components';
import JobCard from '../JobCard/JobCard';
import { featuredJobs } from '../../data/mockData';

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
  max-width: 1280px;
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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSize.sm};
  transition: all ${props => props.theme.transitions.fast};
  border: 1px solid ${props => props.theme.colors.border};
  
  ${props => props.active ? `
    background: ${props.theme.colors.gradient.primary};
    color: white;
    border-color: ${props.theme.colors.primary};
    box-shadow: ${props.theme.shadows.md};
  ` : `
    background-color: ${props.theme.colors.cardBackground};
    color: ${props.theme.colors.text.primary};
    
    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      transform: translateY(-1px);
    }
  `}
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
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

const NoJobsMessage = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.text.secondary};
  
  .icon {
    font-size: ${props => props.theme.fontSize['4xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  .title {
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: ${props => props.theme.fontWeight.semibold};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  .subtitle {
    font-size: ${props => props.theme.fontSize.base};
  }
`;

const JobSection = () => {
  const [filter, setFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(6);

  const filters = ['All', 'Full-Time', 'Remote', 'Part-Time', 'Contract'];

  const filteredJobs = featuredJobs.filter(job => {
    if (filter === 'All') return true;
    return job.type === filter;
  });

  const displayedJobs = filteredJobs.slice(0, displayCount);
  const hasMoreJobs = displayCount < filteredJobs.length;

  const handleJobClick = (job) => {
    console.log('Job clicked:', job);
    // Handle job click - could navigate to job details page
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, filteredJobs.length));
  };

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>Featured Jobs</SectionTitle>
          <SectionSubtitle>
            Discover your next career opportunity from top companies
          </SectionSubtitle>
        </SectionHeader>

        {/* Filter Buttons */}
        <FilterContainer>
          {filters.map((filterOption) => (
            <FilterButton
              key={filterOption}
              active={filter === filterOption}
              onClick={() => {
                setFilter(filterOption);
                setDisplayCount(6); // Reset display count when filter changes
              }}
            >
              {filterOption}
              {filterOption !== 'All' && (
                <span style={{ marginLeft: '8px', opacity: 0.7 }}>
                  ({featuredJobs.filter(job => job.type === filterOption).length})
                </span>
              )}
            </FilterButton>
          ))}
        </FilterContainer>

        {/* Jobs Grid */}
        {displayedJobs.length > 0 ? (
          <>
            <JobsGrid>
              {displayedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={handleJobClick}
                />
              ))}
            </JobsGrid>

            {/* Load More Button */}
            {hasMoreJobs && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load More Jobs ({filteredJobs.length - displayCount} remaining)
              </LoadMoreButton>
            )}
          </>
        ) : (
          <NoJobsMessage>
            <div className="icon">🔍</div>
            <div className="title">No jobs found</div>
            <div className="subtitle">
              Try adjusting your filter to see more job opportunities
            </div>
          </NoJobsMessage>
        )}
      </Container>
    </SectionContainer>
  );
};

export default JobSection;