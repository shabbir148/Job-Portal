import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiMapPin } from 'react-icons/fi';
    import { MdBusiness } from 'react-icons/md'; // From Material Design Icons


const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.surface};
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  }
`;

const BackgroundDecorations = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.1;
  
  .decoration {
    position: absolute;
    font-size: 2rem;
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 3rem;
    }
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 4rem;
    }
  }
  
  .decoration-1 {
    top: 5rem;
    left: 2.5rem;
  }
  
  .decoration-2 {
    top: 8rem;
    right: 5rem;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeight.bold};
  }
  
  .decoration-3 {
    top: 10rem;
    left: 25%;
  }
  
  .decoration-4 {
    bottom: 10rem;
    right: 2.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  .decoration-5 {
    bottom: 8rem;
    left: 5rem;
    color: ${props => props.theme.colors.secondary};
  }
  
  .decoration-6 {
    top: 15rem;
    right: 33%;
  }
  
  .decoration-7 {
    bottom: 15rem;
    right: 25%;
    color: ${props => props.theme.colors.success};
  }
  
  .decoration-8 {
    top: 20rem;
    left: 33%;
    color: ${props => props.theme.colors.error};
  }
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  animation: fadeIn 0.6s ease-out;
`;

const BadgeContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary}20;
  border-radius: ${props => props.theme.borderRadius.full};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  
  .icon {
    font-size: ${props => props.theme.fontSize.xl};
    margin-right: ${props => props.theme.spacing.sm};
  }
  
  .text {
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.theme.fontWeight.medium};
    color: ${props => props.theme.colors.secondary};
  }
`;

const MainHeading = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.xl};
  animation: fadeIn 0.8s ease-out 0.2s both;
`;

const HeadingText = styled.h1`
  font-size: ${props => props.theme.fontSize['3xl']};
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 1.2;
  margin-bottom: ${props => props.theme.spacing.sm};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize['4xl']};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSize['5xl']};
  }
  
  .highlight {
    color: ${props => props.theme.colors.primary};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${props => props.theme.colors.gradient.primary};
      border-radius: ${props => props.theme.borderRadius.full};
    }
  }
`;

const DecorativeUnderline = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 4px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto ${props => props.theme.spacing.xxl};
  animation: fadeIn 1s ease-out 0.4s both;
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSize.xl};
  }
`;

const SearchForm = styled.div`
  max-width: 1024px;
  margin: 0 auto ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  padding: ${props => props.theme.spacing.lg};
  animation: fadeIn 1.2s ease-out 0.6s both;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.muted};
  pointer-events: none;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md} ${props => props.theme.spacing.md} 2.5rem;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transitions.fast};
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const SearchButton = styled.button`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.xl};
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.semibold};
  white-space: nowrap;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  }
`;

const SuggestedKeywords = styled.div`
  animation: fadeIn 1.4s ease-out 0.8s both;
  
  .label {
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.text.muted};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
  
  .keywords {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${props => props.theme.spacing.md};
  }
`;

const KeywordButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeight.medium};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-1px);
  }
`;

const Hero = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    company: ''
  });

  const suggestedKeywords = ["Designer", "Developer", "Tester", "Manager", "Analyst"];

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchData);
    // Implement search logic here
  };

  const handleKeywordClick = (keyword) => {
    handleInputChange('jobTitle', keyword);
  };

  return (
    <HeroContainer>
      <BackgroundDecorations>
        <div className="decoration decoration-1">🏠</div>
        <div className="decoration decoration-2">G</div>
        <div className="decoration decoration-3">🎯</div>
        <div className="decoration decoration-4">in</div>
        <div className="decoration decoration-5">f</div>
        <div className="decoration decoration-6">🐦</div>
        <div className="decoration decoration-7">📊</div>
        <div className="decoration decoration-8">📺</div>
      </BackgroundDecorations>

      <Container>
        {/* Badge */}
        <Badge>
          <BadgeContent>
            <span className="icon">🏠</span>
            <span className="text">No.1 Job Hunt Website</span>
          </BadgeContent>
        </Badge>

        {/* Main Heading */}
        <MainHeading>
          <HeadingText>
            <div>Search, Apply &</div>
            <div>
              Get Your <span className="highlight">Dream Job</span>
            </div>
          </HeadingText>
          <DecorativeUnderline />
        </MainHeading>

        {/* Subtitle */}
        <Subtitle>
          Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
        </Subtitle>

        {/* Search Form */}
        <SearchForm>
          <SearchInputContainer>
            <InputGroup>
              <InputIcon>
                <FiSearch size={20} />
              </InputIcon>
              <SearchInput
                type="text"
                placeholder="Job title or keyword"
                value={searchData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <FiMapPin size={20} />
              </InputIcon>
              <SearchInput
                type="text"
                placeholder="Location"
                value={searchData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <MdBusiness size={20} />
              </InputIcon>
              <SearchInput
                type="text"
                placeholder="Company"
                value={searchData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </InputGroup>

            <SearchButton onClick={handleSearch}>
              Search Jobs
            </SearchButton>
          </SearchInputContainer>
        </SearchForm>

        {/* Suggested Keywords */}
        <SuggestedKeywords>
          <p className="label">Popular searches:</p>
          <div className="keywords">
            {suggestedKeywords.map((keyword, index) => (
              <KeywordButton
                key={index}
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </KeywordButton>
            ))}
          </div>
        </SuggestedKeywords>
      </Container>
    </HeroContainer>
  );
};

export default Hero;