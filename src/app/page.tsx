import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";

export default function Home() {
  return (
    <main>
      <h1>Favorite Bands</h1>

      <section className="band-grid">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}
// หน้าหลัก
