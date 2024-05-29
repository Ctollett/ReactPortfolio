import React from 'react';

import mountain from '../../assets/images/MountainImage.jpg'; 

const projects = [
    {
      id: '001',
      title: "PAREIDOLIA",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Diam maecenas sed enim ut sem viverra aliquet eget. Nam aliquam sem et tortor consequat id porta nibh. Duis at consectetur lorem donec massa sapien. Accumsan in nisl nisi scelerisque eu ultrices. Sed adipiscing diam donec adipiscing tristique risus nec. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Massa id neque aliquam vestibulum morbi blandit cursus risus. Tempus iaculis urna id volutpat lacus. Rhoncus dolor purus non enim praesent. Quam quisque id diam vel quam elementum pulvinar. Lectus sit amet est placerat in egestas erat imperdiet sed. A diam maecenas sed enim ut sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor s in. Orci phasellus egestas telt urna condimentum mattis. Ac tortor dignissim convallis aenean et tortor at risus.",
      headerImage: '/path/to/image.jpg',
      images: [{url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },

    {
      id: '002',
      title: "SORTALIZER",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Diam maecenas sed enim ut sem viverra aliquet eget. Nam aliquam sem et tortor consequat id porta nibh. Duis at consectetur lorem donec massa sapien. Accumsan in nisl nisi scelerisque eu ultrices. Sed adipiscing diam donec adipiscing tristique risus nec. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Massa id neque aliquam vestibulum morbi blandit cursus risus. Tempus iaculis urna id volutpat lacus. Rhoncus dolor purus non enim praesent. Quam quisque id diam vel quam elementum pulvinar. Lectus sit amet est placerat in egestas erat imperdiet sed. A diam maecenas sed enim ut sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor s in. Orci phasellus egestas telt urna condimentum mattis. Ac tortor dignissim convallis aenean et tortor at risus.",
      headerImage: '/path/to/image.jpg',
      images: [{url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },

    {
      id: '003',
      title: "Project 3",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Diam maecenas sed enim ut sem viverra aliquet eget. Nam aliquam sem et tortor consequat id porta nibh. Duis at consectetur lorem donec massa sapien. Accumsan in nisl nisi scelerisque eu ultrices. Sed adipiscing diam donec adipiscing tristique risus nec. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Massa id neque aliquam vestibulum morbi blandit cursus risus. Tempus iaculis urna id volutpat lacus. Rhoncus dolor purus non enim praesent. Quam quisque id diam vel quam elementum pulvinar. Lectus sit amet est placerat in egestas erat imperdiet sed. A diam maecenas sed enim ut sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor s in. Orci phasellus egestas telt urna condimentum mattis. Ac tortor dignissim convallis aenean et tortor at risus.",
      headerImage: '/path/to/image.jpg',
      images: [{url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },

    {
      id: '004',
      title: "Choctaw Nation of Oklahoma",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Diam maecenas sed enim ut sem viverra aliquet eget. Nam aliquam sem et tortor consequat id porta nibh. Duis at consectetur lorem donec massa sapien. Accumsan in nisl nisi scelerisque eu ultrices. Sed adipiscing diam donec adipiscing tristique risus nec. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Massa id neque aliquam vestibulum morbi blandit cursus risus. Tempus iaculis urna id volutpat lacus. Rhoncus dolor purus non enim praesent. Quam quisque id diam vel quam elementum pulvinar. Lectus sit amet est placerat in egestas erat imperdiet sed. A diam maecenas sed enim ut sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor s in. Orci phasellus egestas telt urna condimentum mattis. Ac tortor dignissim convallis aenean et tortor at risus.",
      headerImage: '/path/to/image.jpg',
      images: [{url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}, {url: mountain}],
      techStack: ["React", "Node.js", "Strapi CMS"],
      date: "2023",
      role: "Developer"
    },
  ];
  
  export const getProjectById = (id) => projects.find(project => project.id === id);
  
  export default projects;
  

