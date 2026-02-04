import { notFound } from 'next/navigation';
import TeamMemberDetail from '../../../../pages/Team/TeamMemberDetail';
import { teamMembers } from '../../../../pages/Team/team.constants';

type Params = {
  member: string;
};

export const generateStaticParams = () => {
  return teamMembers.map((member) => ({
    member: member.slug,
  }));
};

const TeamMemberPage = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;
  const member = teamMembers.find((teamMember) => teamMember.slug === resolvedParams.member);

  if (!member) {
    notFound();
  }

  return <TeamMemberDetail member={member} />;
};

export default TeamMemberPage;
