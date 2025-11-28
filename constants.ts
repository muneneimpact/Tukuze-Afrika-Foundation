import { Event, Program, TeamMember, SchoolClub, ClubPathway } from './types';
import { Bot, Cpu, Code, Leaf, Hammer, Mic, Sprout, Brain, PlayCircle } from 'lucide-react';

export const CONTACT_INFO = {
  email: 'stem@tukuzeafrika.org',
  phone: '0723175181',
  location: 'Meru, Kenya'
};

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Meru County Robotics Demo Day',
    date: '2024-11-15',
    location: 'Meru National Polytechnic',
    description: 'Showcasing the best student-built robots from across our partner schools in Meru and Tharaka Nithi.',
    image: 'https://picsum.photos/800/400?random=1',
    isUpcoming: true
  },
  {
    id: '2',
    title: 'STEM Teachers Workshop: Tharaka Nithi',
    date: '2024-12-05',
    location: 'Chuka University Hall',
    description: 'Advanced pedagogical strategies for STEM education for our 40+ Patrons.',
    image: 'https://picsum.photos/800/400?random=2',
    isUpcoming: true
  },
  {
    id: '3',
    title: 'Regional Coding Hackathon',
    date: '2024-08-20',
    location: 'Meru Innovation Hub',
    description: '48 hours of intense coding challenges for high school students.',
    image: 'https://picsum.photos/800/400?random=3',
    isUpcoming: false
  }
];

export const FOUNDATION_TEAM: TeamMember[] = [
  { id: '1', name: 'Boniface Munene', role: 'Board Chairman & Founder', image: 'https://picsum.photos/200/200?random=10', type: 'foundation' },
  { id: '2', name: 'Kefa Wa Kefa', role: 'Board Treasurer & Head of Finance', image: 'https://picsum.photos/200/200?random=11', type: 'foundation' },
  { id: '3', name: 'Gladwell Kiringo', role: 'Head of Volunteer Coordination', image: 'https://picsum.photos/200/200?random=12', type: 'foundation' },
  { id: '4', name: 'Kajuju Muriungi', role: 'Head of Student Welfare', image: 'https://picsum.photos/200/200?random=13', type: 'foundation' },
  { id: '5', name: 'Perpetual Gatwiri', role: 'Board Secretary & Partnerships', image: 'https://picsum.photos/200/200?random=14', type: 'foundation' },
  { id: '6', name: 'Getrude Mwendwa', role: 'Head of Student Welfare', image: 'https://picsum.photos/200/200?random=15', type: 'foundation' },
  { id: '7', name: 'Denson Mutuma', role: 'Team Leader', image: 'https://picsum.photos/200/200?random=16', type: 'foundation' },
];

export const PATRONS: TeamMember[] = [
  { id: '101', name: 'Mr. John Kamau', role: 'Patron', school: 'Burieruri Boys High School', expertise: 'Robotics', image: 'https://picsum.photos/200/200?random=20', type: 'patron' },
  { id: '102', name: 'Ms. Sarah Ochieng', role: 'Patron', school: 'Chogoria Girls High School', expertise: 'Coding', image: 'https://picsum.photos/200/200?random=21', type: 'patron' },
  { id: '103', name: 'Mr. David Weber', role: 'Patron', school: 'Kibirichia Girls', expertise: 'Electronics', image: 'https://picsum.photos/200/200?random=22', type: 'patron' },
  { id: '104', name: 'Mrs. Alice Mwangi', role: 'Patron', school: 'Kaaga Girls', expertise: 'Apiculture', image: 'https://picsum.photos/200/200?random=23', type: 'patron' },
];

// MOCK DATA GENERATOR for schools to fill in the requested details
const generateSchoolData = (name: string, id: number): SchoolClub => {
    const nicknames = ['Tech Titans', 'Innovators', 'Cyber Savants', 'Green Future', 'RoboWarriors', 'Code Crafters', 'Future Engineers', 'Silicon Squad'];
    const products = ['Liquid Soap', 'Beeswax Candles', 'Solar Lamps', 'Arduino Rovers', 'Recycled Art', 'Detergents', 'Smart Bins'];
    const needs = ['Robotics Kits', 'Laptops', 'Soldering Stations', 'Mentorship', 'Internet Access', 'Lab Space'];
    
    // Assigning specific patrons if known from the previous PATRONS list, else placeholder
    let patron = "TBA";
    if (name.includes("Burieruri")) patron = "Mr. John Kamau";
    if (name.includes("Chogoria")) patron = "Ms. Sarah Ochieng";
    if (name.includes("Kibirichia")) patron = "Mr. David Weber";
    if (patron === "TBA") {
       const firstNames = ["James", "Mary", "Peter", "Grace", "Paul", "Esther", "Samuel", "Hellen"];
       const lastNames = ["Mwangi", "Kimathi", "Mutua", "Otieno", "Njoroge", "Kariuki"];
       patron = `Mr/Ms. ${firstNames[id % firstNames.length]} ${lastNames[id % lastNames.length]}`;
    }

    return {
        id: (id + 1).toString(),
        name: name,
        nickname: nicknames[id % nicknames.length],
        patron: patron,
        principal: `Principal ${String.fromCharCode(65 + (id % 26))}. Name`, // Placeholder Principal
        members: 40 + (id * 7) % 100,
        meetingDay: ['Tuesdays 4:00 PM', 'Wednesdays 3:30 PM', 'Thursdays 4:00 PM', 'Fridays 2:00 PM'][id % 4],
        needs: [needs[id % needs.length], needs[(id + 2) % needs.length]],
        products: [products[id % products.length]]
    };
};

const RAW_SCHOOL_NAMES = [
  "ACK Kaanwa Secondary School", "Akithi Girls High School", "Bishop Njiru Kangeta Girls", 
  "Burieruri Boys High School", "Chogoria Girls High School", "Chief Mbogori Girls School", 
  "Chiakariga Day Secondary School", "Gikumene Girls High School", "Gikurune Boys Secondary School", 
  "Gikurune Girls Secondary School", "Itugururu Secondary School", "Kajianduthi High School", 
  "Kibirichia Girls High School", "Kirindine Secondary School", "Kithirune Girls School", 
  "Marimanti Girls", "Mburugiti Secondary School", "MCK Bidii Comprehensive School", 
  "Miathene Boys", "Muthambi Girls", "Mulathankari Mixed Day Secondary School", 
  "Mwithumwiru Mixed Day Secondary School", "Ngiine Mixed Day Secondary School", 
  "Ntoroni Secondary School", "Ntugi Mixed Day Secondary School", 
  "St. Marys' Girls - Igoji", "Timau Girls Secondary School"
];

export const SCHOOLS_DATA: SchoolClub[] = RAW_SCHOOL_NAMES.map((name, index) => generateSchoolData(name, index));

export const PATHWAYS: ClubPathway[] = [
  { 
    title: 'Artificial Intelligence', 
    icon: Brain, 
    description: 'Machine Learning, Data Science, and Future Tech.',
    details: 'Students explore the basics of AI ethics, training simple machine learning models using Teachable Machine, and understanding how data shapes our world.',
    videoUrl: 'https://www.youtube.com/embed/yCXm5cgG0UA' // Updated
  },
  { 
    title: 'Coding & Programming', 
    icon: Code, 
    description: 'Software development, web apps, and algorithms.',
    details: 'Students learn Python, JavaScript, and block-based coding. Projects include building school websites, simple mobile apps, and solving algorithmic challenges.',
    videoUrl: 'https://www.youtube.com/embed/N7ZmPYaXoic' // Updated
  },
  { 
    title: 'Robotics & Engineering', 
    icon: Bot, 
    description: 'Building and programming autonomous machines.',
    details: 'Focuses on Arduino and Raspberry Pi. Students build line-following robots, obstacle-avoiding rovers, and automated arms.',
    videoUrl: 'https://www.youtube.com/embed/pQgxiQAMTTo' // Updated: Map of Engineering
  },
  { 
    title: 'Electronics', 
    icon: Cpu, 
    description: 'Circuit design, IoT, and hardware logic.',
    details: 'Understanding voltage, current, and resistance. Projects include smart home sensors, automated lighting systems, and basic PCB design.',
    videoUrl: 'https://www.youtube.com/embed/A4d-a7P_k3g?si=generic'
  },
  { 
    title: 'Apiculture', 
    icon: Sprout, 
    description: 'Scientific beekeeping and agricultural tech.',
    details: 'Modern beekeeping techniques using sensors to monitor hive health, temperature, and humidity for optimal honey production.',
    videoUrl: 'https://www.youtube.com/embed/W9yv8k_Z09o?si=generic'
  },
  { 
    title: 'Carpentry & Design', 
    icon: Hammer, 
    description: 'Precision crafting and structural design.',
    details: 'Combining traditional woodworking with CAD design to create furniture, hives, and structural models for engineering projects.' 
  },
  { 
    title: 'Environmental Conservation', 
    icon: Leaf, 
    description: 'Sustainable solutions and green energy.',
    details: 'Tree planting initiatives, waste management systems, and renewable energy projects like solar water heaters.' 
  },
  { 
    title: 'Public Speaking', 
    icon: Mic, 
    description: 'Communication, debate, and case study presentation.',
    details: 'Compulsory for all. Students learn to pitch ideas, debate scientific ethics, and present technical projects to judges.' 
  },
];

export const STATISTICS = [
  { label: 'Partners', value: '7' },
  { label: 'Volunteers', value: '85' },
  { label: 'Students Impacted', value: '3,900+' },
  { label: 'Model Schools', value: '3' },
  { label: 'Schools Engaged', value: '27' },
];