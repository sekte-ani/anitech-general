// import React from 'react';
// import MemberCard from '../micro/MemberCard';

// interface Member {
//   id: number;
//   name: string;
//   role_name: string[];
//   images: string;
// }

// interface MemberSectionProps {
//   data: Member[];
// }

// const MemberSection: React.FC<MemberSectionProps> = ({ data }) => {
//   return (
//     <div className='grid grid-rows-3 sm:grid-cols-3 justify-self-center gap-20 md:gap-14 lg:gap-16 xl:gap-28'>
//       {data.map((item, index) => (
//         <MemberCard
//           key={index}
//           name={item.name}
//           img={item.images}
//           division={item.role_name.join('& ')}
//           alt={item.name}
//         />
//       ))}
//     </div>
//   );
// };

// export default MemberSection;
