
export interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  links: {
    type: 'google' | 'conference';
    url: string;
  }[];
}

export interface LinkItem {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}
