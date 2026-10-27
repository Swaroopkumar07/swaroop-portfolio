export const profile = {
  name: "Swaroop Kumar Painam",
  email: "painamswaroopkumar@gmail.com",
  github: "https://github.com/Swaroopkumar07",
  linkedin:
    "https://www.linkedin.com/in/swaroopkumar-painam-321577222/",
  instagram: "https://www.instagram.com/swaroop.kumar___/",
  resume: `${import.meta.env.BASE_URL}Swaroop_Resume.pdf`,
  location: "Hyderabad, India",
};


export const navigation = [
  { number: "01", label: "About", id: "about" },
  { number: "02", label: "Experience", id: "experience" },
  { number: "03", label: "Work", id: "work" },
  { number: "04", label: "Contact", id: "contact" },
];

export const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "REST APIs",
  "Microservices",
  "MySQL / PostgreSQL",
  "Docker / AWS",
];

export const experience = {
  company: "Tata Consultancy Services",
  shortName: "TCS",
  role: "Assistant System Engineer",
  period: "February 2025 — Present",
  location: "Hyderabad",
  responsibilities: [
    "Contribute to modernizing legacy financial applications by decomposing monolithic systems into Spring Boot microservices.",
    "Develop RESTful APIs with attention to performance, security, and backward compatibility.",
    "Implement React interface enhancements and dynamic routing based on link types.",
    "Support validation and troubleshooting using mainframe applications and TSO/ISPF sessions.",
    "Collaborate with QA, DevOps, and product teams through Agile sprints and production releases.",
  ],
};

export const projects = [
  {
    id: "sia",
    number: "01",
    name: "SIA All In One",
    category: "Mobile application",
    description:
      "A mobile application that brings academic and reference materials into one accessible library. Built with React Native and Firebase, with user authentication and real-time data management.",
    technologies: ["React Native", "Firebase", "Authentication"],
    url: "https://play.google.com/store/apps/details?id=com.sia.learn",
    action: "View on Google Play",
  },
  {
    id: "ev-parking",
    number: "02",
    name: "EV Parking Application",
    category: "Web application",
    description:
      "A React application for displaying and managing electric vehicle charging station information, helping businesses showcase their stations and making them easier to discover.",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://cbrvparking.netlify.app/",
    action: "Visit website",
  },
  {
    id: "resort",
    number: "03",
    name: "Resort Application",
    category: "Booking application",
    description:
      "A responsive resort website for browsing and booking rooms, supported by an administration dashboard for managing reservations, availability, and booking metrics.",
    technologies: ["React", "MySQL", "Admin Dashboard"],
    url: "https://ananyaresort.in/",
    action: "Visit website",
  },
];