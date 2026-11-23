/* Vivek & Priya · Wedding & Cocktail Invitation */
(() => {
  const dec10 = "Thursday, 10 December 2026";
  const dec12 = "Saturday, 12 December 2026";
  const home = "3/123, Subhash Nagar, New Delhi 110027";
  const cocktail = "C-188, Maya Puri Phase 2, in front of Buho Rooftop Cafe, Amin, New Delhi 110064";
  const arrival = "The Riyasat · 1st Floor · Amar Vilas, Wazirpur, New Delhi";
  const palaceQuery = "The Riyasat Rajwada Palace Amar Vilas Wazirpur New Delhi";

  window.WEDDING_CONFIG = {
    wedding: {
      dateISO: "2026-12-12T10:00:00+05:30",
    },
    events: [
      { name: "Kirtan", icon: "wedding", date: dec10, time: "11:00 AM",
        venue: "At home", address: home, mapsQuery: home, accent: "#865619" },
      { name: "Cocktail & Mehndi Night", icon: "sangeet", date: dec10, time: "8:00 PM onwards",
        venue: "Romeo by Rutba", address: cocktail, mapsQuery: "Romeo by Rutba C-188 Maya Puri Phase 2 New Delhi", accent: "#6B3674" },
      { name: "Haldi", icon: "haldi", date: dec12, time: "10:00 AM",
        venue: "At home", accent: "#865619" },
      { name: "Ghadoli", icon: "wedding", date: dec12, time: "12:00 PM",
        venue: "At home", accent: "#6E5143" },
      { name: "Sehra Bandi", icon: "wedding", date: dec12, time: "6:00 PM",
        venue: "At home", accent: "#7A1F3D" },
      { name: "Departure of Barat", icon: "reception", date: dec12, time: "8:00 PM",
        venue: "From home", address: home, mapsQuery: home, accent: "#865619" },
      { name: "Arrival of Barat", icon: "reception", date: dec12,
        venue: "Rajwada Palace", address: arrival, mapsQuery: palaceQuery, accent: "#7A1F3D" },
    ],
    venue: {
      name: "Rajwada Palace",
      address: arrival,
      mapsQuery: palaceQuery,
    },
    theme: {
      maroon: "#6D1A33", maroonDeep: "#4A0F22", gold: "#C9A24B",
      goldSoft: "#E5C878", ivory: "#F4EBDB", inkOnIvory: "#3A2230",
    },
    frames: {
      count: 181, loPath: "assets/frames/lo/", hiPath: "assets/frames/hi/",
      prefix: "f_", ext: ".webp",
    },
    sanctum: {
      count: 121, path: "assets/frames2/", prefix: "s_", ext: ".webp",
      heading: "The Hidden Moment", eyebrow: "A sacred moment awaits",
      hint: "Scroll gently to unfold this hidden moment",
      veilText: "A sacred moment awaits",
    },
  };
})();
