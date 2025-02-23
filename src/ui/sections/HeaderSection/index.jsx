"use client";
import { Leaf, ArrowRight } from "lucide-react";
import Button from "@/ui/components/Button";
import Menu from "@/ui/components/Menu";
import {
  StyledHeaderSection,
  HeroContainer,
  ContentSection,
  ImageSection,
  IconWrapper,
  Title,
  Description,
  ButtonWrapper,
  Card,
  CardImage,
  CardContent,
  CardText,
  CardValue,
} from "./headerSection.style";

const HeaderSection = () => {
  return (
    <StyledHeaderSection>
      <HeroContainer>
        <ContentSection>
          <IconWrapper>
            <Leaf />
            Sustainable Energy
          </IconWrapper>
          <Title>
            Transform Waste into
            <span>Clean Energy</span>
          </Title>
          <Description>
            Revolutionizing waste management with smart biodigester technology.
            Monitor and optimize your system with our integrated solution.
          </Description>
          <ButtonWrapper>
            <Button>
              Get started <ArrowRight />
            </Button>
            <Button ghost={true}>Learn More</Button>
          </ButtonWrapper>
        </ContentSection>

        <ImageSection>
          <Card>
            <CardImage
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80"
              alt="Biodigester"
            />
          </Card>
          <CardContent>
            <Leaf color="rgb(92, 156, 84)" />
            <div>
              <CardText>CO₂ Reduction</CardText>
              <CardValue>2.5 tons/year</CardValue>
            </div>
          </CardContent>
        </ImageSection>
      </HeroContainer>
      <Menu />
    </StyledHeaderSection>
  );
};

export default HeaderSection;
