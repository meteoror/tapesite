export interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
  cover: string;
  description: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "ID 1",
    artist: "n/a",
    src: "/audio/01.ogg",
    cover: "/covers/cover1.png",
    description: "the instrumental for an unreleased song that i made when i first discovered splice a while back, hence all the vocal loops. one of my favorites hopefully i can actually release it soon LOL"
  },
  {
    id: 2,
    title: "ID 2",
    artist: "n/a",
    src: "/audio/02.ogg",
    cover: "/covers/cover2.png",
    description: "the instrumental for a longer, vocal based song i'm working on... not the best without them, but it's a good example of my ambient music!"
  },
  {
    id: 3,
    title: "Forever",
    artist: "sacacia",
    src: "/audio/03.ogg",
    cover: "/covers/cover3.png",
    description: "released on my main soundcloud a few months ago. hasn't been released to streaming services yet but you can access it on my soundcloud at https://soundcloud.com/sacacia/4ever"
  },
  {
    id: 4,
    title: "annulus",
    artist: "sacacia",
    src: "/audio/04.ogg",
    cover: "/covers/cover4.png",
    description: "ambient song that somehow got really popular in the comp it was submitted to. not my favorite but the people like it! https://soundcloud.com/sacacia/annulus-2"
  },
  {
    id: 5,
    title: "Callsign",
    artist: "sacacia",
    src: "/audio/05.ogg",
    cover: "/covers/cover5.png",
    description: "same situation as annulus, got popular in a different comp! whole different style though LOL https://soundcloud.com/sacacia/callsign-1"
  },
  {
    id: 6,
    title: "ID 3",
    artist: "sacacia",
    src: "/audio/06.ogg",
    cover: "/covers/cover6.png",
    description: "remix of a jane remover song, planning to put my own vocals on it #soon hopefully"
  },
  {
    id: 7,
    title: "RUGHF",
    artist: "sacacia",
    src: "/audio/07.ogg",
    cover: "/covers/cover7.png",
    description: "i made this song for an audio secret santa gift exchange. there's about 15 layers dedicated soley to the drums, i'm very happy with how it turned out!"
  },
  {
    id: 8,
    title: "1 .. 2 .. 3",
    artist: "sacacia",
    src: "/audio/frost.ogg",
    cover: "/covers/cover8.png",
    description: "a remix for the frost children sister remix competition which ended in me getting a cosign from them!! very happy, i have no idea what genre this is though https://soundcloud.com/sacacia/what-is-forever-for"
  },
  {
    id: 9,
    title: "old me",
    artist: "sacacia",
    src: "/audio/old.ogg",
    cover: "/covers/cover9.png",
    description: "one of my oldest songs i've ever made, turned out really nice even though it's carried by the vocals https://soundcloud.com/sacacia/old-me"
  },
  {
    id: 10,
    title: "THE_JOKE_IS_ON_U",
    artist: "sacacia",
    src: "/audio/joke.ogg",
    cover: "/covers/cover10.png",
    description: "10th song for a ten minute long dj mix!! i am SO SO SO proud of this like so badly ok https://soundcloud.com/sacacia/aprilfools2025"
  }
];
