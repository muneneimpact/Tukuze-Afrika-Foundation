export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  type: 'foundation' | 'patron';
  expertise?: string; // For patrons
  school?: string; // For patrons
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface ClubPathway {
  title: string;
  description: string;
  icon: any;
  details: string;
  videoUrl?: string; // Optional video link
}

export interface SchoolClub {
  id: string;
  name: string;
  nickname: string;
  patron: string;
  principal: string;
  members: number;
  meetingDay: string;
  needs: string[];
  products: string[];
}