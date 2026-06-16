export type Event = {
  name: string;
  location: string;
  date: string;
  time: string;
  languages?: string[];
};

export const events: Event[] = [
  {
    name: "Language Exchange",
    location: "Americano Classico, Blackfriars",
    date: "Wed 17 Jun",
    time: "6:30 PM - 9 PM",
    languages: ["all languages"],
  },
  {
    name: "Language Exchange",
    location: "Americano Classico, Blackfriars",
    date: "Thu 1 Jul",
    time: "6:30 PM- 9PM",
    languages: ["all languages"],
  },
  {
    name: "Language Exchange",
    location: "Americano Classico, Blackfriars",
    date: "Sun 15 Jul",
    time: "6:30 PM - 9 PM",
    languages: ["all languages"],
  },
];
