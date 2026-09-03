import Image from "next/image"; //เก็บข้อมูลที่แสดงหน้าเว็บค่ะ ux ui
import Link from "next/link";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <Link href={`/bands/${band.id}`} className="band-card-link">
      <article className="band-card">
        <Image
          src={band.image}
          alt={band.name}
          width={400}
          height={250}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <h2>{band.name}</h2>

        <p>แนวเพลง: {band.genre}</p>

        <p className="band-card-hint">
          คลิกเพื่อดูสมาชิก ♡
        </p>
      </article>
    </Link>
  );
}