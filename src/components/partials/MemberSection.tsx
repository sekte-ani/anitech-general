import React from 'react';
import MemberCard from '../micro/MemberCard';

interface Member {
  name: string;
  img: string;
  division: string;
}

interface MemberSectionProps {
  data: Member[];
}

const MemberSection: React.FC<MemberSectionProps> = ({ data }) => {
  return (
    <div className='grid grid-rows-3 sm:grid-cols-3 justify-self-center gap-20 md:gap-14 lg:gap-16 xl:gap-28'>
      {data.map((item, index) => (
        <MemberCard
          key={index}
          name={item.name}
          img={item.img}
          division={item.division}
          alt={item.name}
        />
      ))}
    </div>
  );
};

export default MemberSection;
