import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { testimonials } from '../../data/mockData';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  line-height: 1.6;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid ${props => props.active ? '#6366f1' : 'transparent'};
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(1)'};
  
  &:hover {
    background: white;
    transform: scale(1.05);
  }
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 2rem;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
`;

const Star = styled.span`
  color: #fbbf24;
  font-size: 1.5rem;
`;

const TestimonialAuthor = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const TestimonialPosition = styled.p`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    transform: scale(1.2);
  }
`;

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <Container>
      <Title>Testimonials</Title>
      <Subtitle>
        Now, let's review what our career aspirants have to say about our working community and career finding services.
      </Subtitle>
      
      <AvatarContainer>
        <ArrowButton onClick={prevTestimonial}>‹</ArrowButton>
        {testimonials.map((testimonial, index) => (
          <Avatar
            key={testimonial.id}
            active={index === currentTestimonial}
            onClick={() => goToTestimonial(index)}
          >
            {testimonial.image}
          </Avatar>
        ))}
        <ArrowButton onClick={nextTestimonial}>›</ArrowButton>
      </AvatarContainer>

      <TestimonialCard key={current.id}>
        <TestimonialContent>"{current.content}"</TestimonialContent>
        
        <StarsContainer>
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i}>★</Star>
          ))}
        </StarsContainer>
        
        <TestimonialAuthor>{current.name}</TestimonialAuthor>
        <TestimonialPosition>{current.position}</TestimonialPosition>
      </TestimonialCard>

      <NavigationDots>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === currentTestimonial}
            onClick={() => goToTestimonial(index)}
          />
        ))}
      </NavigationDots>
    </Container>
  );
}