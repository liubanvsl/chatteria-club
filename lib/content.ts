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
    languages: ["English", "Spanish", "French", "Italian"],
  },
  {
    name: "French & Spanish Exchange",
    location: "Flat Iron Square, Southwark",
    date: "Thu 3 Jul",
    time: "6:30 PM",
    languages: ["French", "Spanish"],
  },
  {
    name: "International Brunch & Chat",
    location: "Dishoom King's Cross",
    date: "Sun 6 Jul",
    time: "11:00 AM",
    languages: ["English", "Italian", "Portuguese"],
  },
];
