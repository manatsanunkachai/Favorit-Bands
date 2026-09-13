//หน้าที่หลักคือเป็นตัวจัการโต้ตอบกัลผู้ใช้
//จะเก็บข้อมูล การค้นหา การกดติดตาม กดไลด์ จน.ผู้ติดตามและกดไลด์

"use client"; 

import { useState } from "react";
import type { Band } from "@/types/band";
import BandCard from "@/components/BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [search, setSearch] = useState("");
  const [followedBands, setFollowedBands] = useState<number[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({});
//เก็บ id ของวงที่เรากด Follow ไว้ใน Array
  const filteredBands = bands.filter((band) =>
    band.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleFollowToggle = (bandId: number) => {
    setFollowedBands((current) =>
      current.includes(bandId)
        ? current.filter((id) => id !== bandId)
        : [...current, bandId]
    );
  };
  const handleLikeToggle = (bandId: number) => {
  setLikes((current) => ({
    ...current,
    [bandId]: current[bandId] ? 0 : 1,
  }));
};

  return (
    <section>
      <div className="search-box">
        <label htmlFor="band-search">ค้นหาวงดนตรี</label>

        <input
          id="band-search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="พิมพ์ชื่อวงดนตรี..."
        />
      </div>

      <p className="follow-count">
        ติดตามแล้ว {followedBands.length} วง
      </p>

      <section className="band-grid">
        {filteredBands.map((band) => (
          <BandCard
            key={band.id}
            band={band}
            isFollowed={followedBands.includes(band.id)}
            onFollowToggle={handleFollowToggle}
            isLiked={likes[band.id] > 0}
            likeCount={likes[band.id] || 0}
            onLikeToggle={handleLikeToggle}
          />
        ))}
      </section>

      {filteredBands.length === 0 && (
        <div className="empty-state">
          <h2>ไม่พบวงดนตรี</h2>
          <p>ลองค้นหาชื่อวงอื่นอีกครั้ง</p>
        </div>
      )}
    </section>
  );
}