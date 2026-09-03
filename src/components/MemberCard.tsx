import Image from "next/image";
import type { BandMember } from "@/types/band";

type MemberCardProps = {
  member: BandMember;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="member-card">
      <Image
        src={member.image}
        alt={member.name}
        width={200}
        height={200}
        sizes="(max-width: 768px) 45vw, 200px"
      />

      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </article>
  );
}  // สมาชิกในวง
