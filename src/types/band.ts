export type BandMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  image: string;
  members: BandMember[];
};
//เก็บข้อมูลไทป์