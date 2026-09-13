//แสดงข้อมูลของวง รูปวง ชื่อวง แนวเพลง ลิ้งไปดูสมาชิก
//เพิ่ม ข้อมูลของวงแต่ละวงและปุ่มโต้ตอบ
import Image from "next/image";
import Link from "next/link";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onFollowToggle: (bandId: number) => void;
  isLiked: boolean;
  likeCount: number;
  onLikeToggle: (bandId: number) => void;
};

export default function BandCard({
  band,
  isFollowed,
  onFollowToggle,
  isLiked,
  likeCount,
  onLikeToggle,
}: BandCardProps) {
  return (
    <article className="band-card">
      <Link href={`/bands/${band.id}`} className="band-card-link">
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
      </Link>

      <button
        type="button"
        onClick={() => onFollowToggle(band.id)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </button>

      <button
  type="button"
  onClick={() => onLikeToggle(band.id)}
>
  {isLiked ? "♥ Liked" : "♡ Like"} {likeCount}
</button>

    </article>
  );
}