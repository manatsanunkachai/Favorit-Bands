//เก็บข้อมูลเริ่มต้นของวง แยกข้อมูลออกจาก UI
import type { Band } from "@/types/band";  

export const bands: Band[] = [
  {
    id: 1,
    name: "Three Man Down",
    genre: "Thai Pop Rock",
    image: "/images/bands/Three Man Down.jpg",
    members: [
      {
        id: 1,
        name: "กิต",
        role: "Vocal",
        image: "/images/bands/three-man-down/กิต.jpg",
      },
      {
        id: 2,
        name: "ตูน",
        role: "Guitar",
        image: "/images/bands/three-man-down/ตูน.jpg",
      },
      {
        id: 3,
        name: "เต",
        role: "Drums",
        image: "/images/bands/three-man-down/เต.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Oasis",
    genre: "Britpop / Rock",
    image: "/images/bands/OASIS.JPG",
    members: [
      {
        id: 1,
        name: "Liam Gallagher",
        role: "Vocal",
        image: "/images/bands/oasis/Liam Gallagher.jpg",
      },
      {
        id: 2,
        name: "Noel Gallagher",
        role: "Guitar",
        image: "/images/bands/oasis/Noel Gallagher.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "ILLIT",
    genre: "K-Pop",
    image: "/images/bands/ILLIT.jpg",
    members: [
      {
        id: 1,
        name: "Iroha",
        role: "Member",
        image: "/images/bands/illit/Iroha.jpg",
      },
      {
        id: 2,
        name: "Minju",
        role: "Member",
        image: "/images/bands/illit/Minju.jpg",
      },
      {
        id: 3,
        name: "Moka",
        role: "Member",
        image: "/images/bands/illit/Moka.jpg",
      },
      {
        id: 4,
        name: "Wonhee",
        role: "Member",
        image: "/images/bands/illit/Wonhee.jpg",
      },
      {
        id: 5,
        name: "Yunah",
        role: "Member",
        image: "/images/bands/illit/Yunah.jpg",
      },
    ],
  },
];