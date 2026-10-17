export type Application = {
  id: string;
  title: string;
  company: string;
  status: 'Pending' | 'Interviewing' | 'Rejected' | 'Offer';
};

export const applications: Application[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Acme Inc.',
    status: 'Pending',
  },
  
  {
    id: '2',
    title: 'Full Stack Developer',    
    company: 'Beta LLC',
    status: 'Interviewing',
  },
];