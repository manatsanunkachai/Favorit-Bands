import Image from "next/image";  // ใช้แสดงหน้าเว็บ
import Link from "next/link";
import { notFound } from "next/navigation";

import MemberCard from "@/components/MemberCard";
import { bands } from "@/data/bands";

type BandDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BandDetailPage({
  params,
}: BandDetailPageProps) {
  const { id } = await params;

  const band = bands.find((item) => item.id === Number(id));

  if (!band) {
    notFound();
  }

  return (
    <main className="band-detail">
      <Link href="/" className="back-link">
        ← กลับหน้า Favorite Bands
      </Link>

      <section className="band-detail-header">
        <Image
          src={band.image}
          alt={band.name}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
        />

        <h1>{band.name}</h1>

        <p className="band-detail-genre">
          แนวเพลง: {band.genre}
        </p>
      </section>

      <section className="members-section">
        <h2>สมาชิกในวง ♡</h2>

        <div className="member-grid">
          {band.members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </section>
    </main>
  );
}