export type TeamMember = {
  id: string;
  name: string;
  titleKey: string;
  specialtyKey: string;
  descriptionKey: string;
  locationKey: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'lara',
    name: 'Lara Lee',
    titleKey: 'team.members.lara.title',
    specialtyKey: 'team.members.lara.specialty',
    descriptionKey: 'team.members.lara.description',
    locationKey: 'team.members.lara.location',
  },
  {
    id: 'noah',
    name: 'Noah Park',
    titleKey: 'team.members.noah.title',
    specialtyKey: 'team.members.noah.specialty',
    descriptionKey: 'team.members.noah.description',
    locationKey: 'team.members.noah.location',
  },
  {
    id: 'mina',
    name: 'Mina Choi',
    titleKey: 'team.members.mina.title',
    specialtyKey: 'team.members.mina.specialty',
    descriptionKey: 'team.members.mina.description',
    locationKey: 'team.members.mina.location',
  },
];
