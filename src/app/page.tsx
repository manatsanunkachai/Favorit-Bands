import BandExplorer from "@/components/CourseExplorer";
import { bands } from "@/data/bands";

export default function Home() {
  return (
    <main>
      <h1>Favorite Bands</h1>

      <BandExplorer bands={bands} />
    </main>
  );
}

// หน้าหลัก เอาของต่างๆมาประกอบกัน หรือ เป็นตัวประกอบหน้าเว็บ