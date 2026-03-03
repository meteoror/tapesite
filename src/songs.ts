export interface Song {
  id: number;
  title: string;
  src: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "01",
    src: "/audio/01_120_c#min.mp3"
  },
  {
    id: 2,
    title: "02",
    src: "/audio/02_127_emin.mp3"
  },
  {
    id: 3,
    title: "03",
    src: "/audio/03_135_cmin.mp3"
  },
  {
    id: 4,
    title: "04",
    src: "/audio/04_138_c#min.mp3"
  },
  {
    id: 5,
    title: "05",
    src: "/audio/05_142_amin.mp3"
  },
  {
    id: 6,
    title: "06",
    src: "/audio/06_145_gmin.mp3"
  },
  {
    id: 7,
    title: "07",
    src: "/audio/07_150_dmin.mp3"
  },
  {
    id: 8,
    title: "08",
    src: "/audio/08_157_g#min.mp3"
  }
];
