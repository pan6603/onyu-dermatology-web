
"use client";

import styled from "styled-components";
import Header from "@/components/layout/header/Header";
import HomeHeroSection from "@/components/sections/hero/HomeHeroSection"
import HomePhilosophySection from "@/components/sections/about/HomePhilosophySection"
import HomeServicesSection from "@/components/sections/treatment/HomeServicesSection"
import HomeDoctorsSection from "@/components/sections/doctors/HomeDoctorsSection"
import HomeLocationSection from "@/components/sections/location/HomeLocationSection"
import Footer from "@/components/layout/footer/Footer"


const Container = styled.main`
  max-width: 1920px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
`;



export default function Home() {
  return (
    <Container>
      <Header />
      <HomeHeroSection />
      <HomePhilosophySection />
      <HomeServicesSection />
      <HomeDoctorsSection />
      <HomeLocationSection />
      <Footer />
    </Container>
  );
}
