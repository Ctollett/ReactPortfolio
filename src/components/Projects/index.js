import React from 'react';

import mountain from '../../assets/images/MountainImage.jpg'; 
import amberSapphire from '../../assets/images/ChoctawNation/AmberSapphireKiosk.jpg'
import touchOfGold from '../../assets/images/ChoctawNation/TouchofGold-update.jpg'
import vipBonus from '../../assets/images/ChoctawNation/VIPSummerBonusKiosk-Art.jpg'
import TexasRangersChipArt from '../../assets/images/ChoctawNation/TexasRangersChipArt.jpg'
import doubleDown from '../../assets/images/ChoctawNation/DoubleDownandLevelUpArtwork.jpg'
import kingRanch from '../../assets/images/ChoctawNation/KingRanch&Cash.jpg'
import blackFriday from '../../assets/images/ChoctawNation/BlackFridayGiveaway-RGB.jpg'
import breakTheSafe from '../../assets/images/ChoctawNation/BreakTheSafe.jpg'
import aceTheWeened from '../../assets/images/ChoctawNation/AcetheWeekendArtworkRGB.jpg'
import mayTentpole from '../../assets/images/ChoctawNation/MayTentPoleArtwork.jpg'
import casino from '../../assets/images/ChoctawNation/casino.jpg'
import homePage from '../../assets/images/Pareidolia/HomePage.png'
import header from '../../assets/images/Pareidolia/Header.png'
import infoPage from '../../assets/images/Pareidolia/InfoPage.png'
import infoPage2 from '../../assets/images/Pareidolia/InfoPage2.png'
import menu from '../../assets/images/Pareidolia/Menu.png'
import blogSection from '../../assets/images/Pareidolia/BlogSection.png'
import aboutUs from '../../assets/images/Pareidolia/AboutUs.png'
import ourwork from '../../assets/images/Pareidolia/OurWork.png'
import topics from '../../assets/images/Pareidolia/Topics.png'
import about from '../../assets/images/Portfolio/About.png'
import contact from '../../assets/images/Portfolio/Contact.png'
import darkmode from '../../assets/images/Portfolio/DarkMode.png'
import darkmode2 from '../../assets/images/Portfolio/DarkMode-2.png'
import home from '../../assets/images/Portfolio/Home.png'
import menuPortfolio from '../../assets/images/Portfolio/Menu.png'
import project from '../../assets/images/Portfolio/Project-2.png'
import project2 from '../../assets/images/Portfolio/Project.png'
import technologies from '../../assets/images/Portfolio/Technologies.png'

const projects = [
    {
      id: '001',
      title: "PAREIDOLIA",
      site: "Visit Site",
      siteUrl: "https://pareidolia-frontend.uc.r.appspot.com/", 
      overview: "I collaborated with a team of scholars, Ph.D. students, and data scientists to develop a full-stack blog application designed for presenting their work at conferences. The application leverages Strapi headless CMS for the backend, ensuring a robust and flexible content management system. For deployment, we utilized Google Cloud and Digital Ocean, providing a reliable and scalable hosting solution. Additionally, I incorporated effects and animations using GSAP and Locomotive Scroll, enhancing the user experience with smooth transitions and interactive elements. This project highlights our collective effort in combining academic expertise with cutting-edge technology to create a dynamic platform for scholarly communication.",
      headline: "Cutting-Edge Blog Application: Integrating Strapi CMS, GSAP, and Locomotive Scroll for Scholarly Presentations.",
      headerImage: homePage,
      images: [{url: header}, {url: infoPage}, {url: infoPage2}, {url: aboutUs}, {url: topics}, {url: blogSection}, {url: ourwork}, {url: menu}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },

    {
      id: '002',
      title: "PORTFOLIO",
      site: "Visit Site",
      siteUrl: "https://www.coltontollett.dev",
      overview: "My portfolio site is a showcase of my technical and creative skills, built with React and deployed on Google Cloud for robust and scalable performance. To enhance user interaction and visual appeal, I integrated GSAP for smooth scroll animations and Three.js for dynamic and interactive graphics. This combination of technologies ensures a visually engaging and technically sophisticated platform to present my work and expertise.",
      headline: "Dynamic Portfolio Site: React-Powered, Google Cloud Deployed, with GSAP Animations and Three.js Graphics.",
      headerImage: home,
      images: [{url: home}, {url: about}, {url: technologies}, {url: menuPortfolio}, {url: contact}, {url: darkmode}, {url: darkmode2}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },
      
    {
      id: '003',
      title: "Choctaw Nation of Oklahoma",
      site: " ",
      overview: "Since 2017, I have had the privilege of working with the Choctaw Nation in various capacities. My journey began in marketing and communication strategies for the tribal government, where I developed and executed campaigns to promote cultural initiatives, community programs, and governmental projects. Transitioning to the casino design team, I honed my graphic design skills, creating visually compelling artwork for the flagship casino in Durant, Oklahoma. This role has allowed me to blend creativity with strategic thinking, contributing to both the tribal government and the casino's success.",
      headline: "Digital and Graphic Design Expertise: Collaborating with Major Brands like the Texas Rangers and Dallas Mavericks through Choctaw Casino Projects.",
      headerImage: casino,
      images: [{url: amberSapphire}, {url: vipBonus}, {url: touchOfGold}, {url: TexasRangersChipArt}, {url: doubleDown}, {url: kingRanch}, {url: blackFriday}, {url: breakTheSafe}, {url: aceTheWeened},{url: mayTentpole}],
      techStack: ["Photoshop", "InDesign", "Illustrator"],
      date: "2017-Present",
      role: "Designer"
    },
  ];
  
  export const getProjectById = (id) => projects.find(project => project.id === id);
  
  export default projects;
  

