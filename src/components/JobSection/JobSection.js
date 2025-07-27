import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { jobOpenings } from "../../data/mockData"; 

const SectionContainer = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;

  .highlight {
    color: #7c3aed;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 500px;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #7c3aed;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #5b21b6;
  }
`;

const CarouselContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    width: 100%;
    padding: 0 1rem;
    margin: 0 -1rem;
  }
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    transition: transform 0.3s ease;
    transform: translateX(${(props) => props.translateX}px);
    width: max-content;
  }
`;

const JobCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    margin-right: 1.5rem;
    flex-shrink: 0;
    flex-grow: 0;
  }

  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1);
    border-color: transparent;

    .company-info .company-name,
    .company-info .company-location {
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .job-title {
      color: white !important;
    }

    .job-description {
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .job-tags .tag {
      background: rgba(255, 255, 255, 0.2) !important;
      color: white !important;
      border: 1px solid rgba(255, 255, 255, 0.3) !important;
    }
  }

  &.featured {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;

    .company-info {
      color: rgba(255, 255, 255, 0.9);
    }

    .job-tags .tag {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    &:hover {
      background: white;
      color: #111827;

      .company-info .company-name,
      .company-info .company-location {
        color: #6b7280 !important;
      }

      .job-title {
        color: #111827 !important;
      }

      .job-description {
        color: #6b7280 !important;
      }

      .job-tags .tag {
        &.position {
          background: #dbeafe !important;
          color: #1d4ed8 !important;
          border: none !important;
        }

        &.type {
          background: #fef3c7 !important;
          color: #d97706 !important;
          border: none !important;
        }

        &.salary {
          background: #d1fae5 !important;
          color: #059669 !important;
          border: none !important;
        }
      }
    }
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const CompanyLogo = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: ${(props) => props.bgColor || "#f3f4f6"};

  &.figma {
    background: #ff7262;
  }

  &.google {
    background: #ffffff;
    border: 1px solid #e5e7eb;
  }

  &.linkedin {
    background: #0077b5;
  }

  &.amazon {
    background: #ff9900;
  }

  &.twitter {
    background: #1da1f2;
  }

  &.microsoft {
    background: #00a1f1;
  }
`;

const CompanyInfo = styled.div`
  .company-name {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
    transition: color 0.3s ease;
  }

  .company-location {
    font-size: 0.75rem;
    color: #9ca3af;
    transition: color 0.3s ease;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  .featured & {
    color: white;
  }
`;

const JobDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  .featured & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const JobTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  .tag {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;

    &.position {
      background: #dbeafe;
      color: #1d4ed8;
    }

    &.type {
      background: #fef3c7;
      color: #d97706;
    }

    &.salary {
      background: #d1fae5;
      color: #059669;
    }
  }
`;

const CarouselControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const CarouselButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background: #7c3aed;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #5b21b6;
    transform: scale(1.05);
  }

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
    transform: none;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Indicator = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#7c3aed" : "#d1d5db")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#5b21b6" : "#9ca3af")};
  }
`;

const JobOpeningsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

 
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Calculate how much to translate based on container width and card positioning
      const cardWidthWithMargin = 304; // 280px + 24px margin
      setTranslateX(-currentIndex * cardWidthWithMargin);
    } else {
      setTranslateX(0);
    }
  }, [currentIndex, isMobile]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = isMobile ? jobOpenings.length - 1 : jobOpenings.length - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleJobClick = (job) => {
    console.log("Job clicked:", job);
  };

  const handleViewAll = () => {
    console.log("View all jobs clicked");
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < jobOpenings.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <HeaderContent>
            <SectionTitle>
              <span className="highlight">Latest and Top</span> Job Openings
            </SectionTitle>
            <SectionSubtitle>
              Discover the fresh job openings from the giant firms in which you
              might want to apply and take a chance to get hired by top fortune
              companies.
            </SectionSubtitle>
          </HeaderContent>
          <ViewAllButton onClick={handleViewAll}>View All Jobs</ViewAllButton>
        </SectionHeader>

        <CarouselContainer
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <JobsGrid translateX={translateX}>
            {jobOpenings.map((job) => (
              <JobCard
                key={job.id}
                className={job.featured ? "featured" : ""}
                onClick={() => handleJobClick(job)}
              >
                <CompanyHeader>
                  <CompanyLogo className={job.company.logoClass}>
                    {job.company.logo}
                  </CompanyLogo>
                  <CompanyInfo className="company-info">
                    <div className="company-name">{job.company.name}</div>
                    <div className="company-location">
                      {job.company.location}
                    </div>
                  </CompanyInfo>
                </CompanyHeader>

                <JobTitle className="job-title">{job.title}</JobTitle>
                <JobDescription className="job-description">
                  {job.description}
                </JobDescription>

                <JobTags className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.type}`}>
                      {tag.text}
                    </span>
                  ))}
                </JobTags>
              </JobCard>
            ))}
          </JobsGrid>
        </CarouselContainer>

        <CarouselControls>
          <CarouselButton
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ‹
          </CarouselButton>

          <CarouselIndicators>
            {jobOpenings.map((_, index) => (
              <Indicator
                key={index}
                active={index === currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </CarouselIndicators>

          <CarouselButton
            onClick={handleNext}
            disabled={currentIndex === jobOpenings.length - 1}
          >
            ›
          </CarouselButton>
        </CarouselControls>
      </Container>
    </SectionContainer>
  );
};

export default JobOpeningsSection;
