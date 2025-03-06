"use client";
import { Leaf, ArrowRight } from "lucide-react";
import Button from "@/ui/components/Button";
import Menu from "@/ui/components/Menu";
import Link from "next/link";
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
    <StyledHeaderSection id="header">
      <HeroContainer>
        <ContentSection>
          <IconWrapper>
            <Leaf />
            Monitoramento de Dados
          </IconWrapper>
          <Title>
            Gerencie seu Biodigestor com
            <span>Tecnologia</span>
          </Title>
          <Description>
            Revolucionando o gerenciamento de resíduos com tecnologia
            inteligente. Monitore e otimize seu sistema com nossa solução
            integrada.
          </Description>
          <ButtonWrapper>
            <Link href="#mission">
              <Button>
                Saiba mais <ArrowRight />
              </Button>
            </Link>
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
