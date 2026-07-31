// Información de la banda centralizada.
// Los componentes deberían consumir los datos de este archivo
// y no tener información hardcodeada.

export const bandConfig = {
  name: "NEO",
  
  tagline: "Rock Alternativo",

  description: "Sitio oficial de NEO. Música, shows y novedades",

  logo: "/images/logo/neo-logo.jpg",

  social: {
    instagram: "https://www.instagram.com/neo.bandaa",
    spotify: "https://open.spotify.com/intl-es/artist/3XAdf3T9gXyjNPa9MKDmDZ?si=0FgbG6LsS3ilJKO0ugsmZg",
    youtube: "https://www.youtube.com/channel/UC4LDm-w6s7yZsxoXwa2886g",
    tiktok: "https://www.tiktok.com/@neo.bandaa",
    bookingEmail: "neobandacontacto@gmail.com",
  },

  navigation: [
    {
      label: "Inicio",
      href: "#inicio",
    },
    {
      label: "Música",
      href: "#musica",
    },
    {
      label: "Shows",
      href: "#shows",
    },
    {
      label: "Banda",
      href: "#banda",
    },
    {
      label: "Redes",
      href: "#contacto",
    },
    {
      label: "Contacto",
      href: "#contacto",
    }
  ],

hero: {
    images: [
      {
        src: "/images/slideshow/VGIV-13.jpg",
        position: "center 30%"
      },
      {
        src: "/images/slideshow/VGIV-8.jpg",
        position: "center top"
      },
      {
        src: "/images/slideshow/VGIV-3.jpg",
        position: "70% center"
      }
      ]
  },

  latestRelease: {
    title: "Amuleto",
    cover: "/images/releases/neo-amuleto.png",
    spotifyUrl: "https://open.spotify.com/intl-es/track/36gb8l3yhcFgSHPQZg55Qm?si=297522803d324dd8",
    spotifyEmbed: "https://open.spotify.com/embed/track/36gb8l3yhcFgSHPQZg55Qm?utm_source=generator&si=f5ae5c9f2f334071"
  },

  featuredShow: {
    status: "past",
    title: "CUÁNDO TOCA NEO?",
    date: "2026-07-25",
    doorsTime: "20:00",
    venue: "El Emergente",
    address: "Figueroa 1030",
    description: "Presentación en vivo de AMULETO junto al show debut de Vieja Habana.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=El%20Emergente%2C%20Figueroa%201030%2C%20Buenos%20Aires%2C%20Argentina&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=El%20Emergente%2C%20Figueroa%201030%2C%20Buenos%20Aires%2C%20Argentina",
  },

about: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. NEO es una banda de rock alternativo que busca transformar cada fecha en una experiencia intensa y cercana.",
    members: [
            {
        name: "Santiago",
        nickname: "El Tano",
        surname: "Giulio",
        role: "Guitarra líder",
        bio: "Bio pendiente de confirmar.",
        instagram: "https://www.instagram.com/santigiulioo/",
      },
      {
        name: "Pakius",
        nickname: "",
        surname: "",
        role: "Bajo",
        bio: "Bio pendiente de confirmar.",
        instagram: "https://www.instagram.com/pakius_5/",
      },
      {
        name: "Joaco",
        nickname: "",
        surname: "",
        role: "Voz",
        bio: "Bio pendiente de confirmar.",
        instagram: "https://www.instagram.com/juakoo.pe/",
      },
      {
        name: "Bruno",
        nickname: "",
        surname: "Bonica",
        role: "Guitarra rítmica",
        bio: "Bio pendiente de confirmar.",
        instagram: "https://www.instagram.com/brunobonica/",
      },
      {
        name: "Ezequiel",
        nickname: "El Colo",
        surname: "Zarate",
        role: "Batería",
        bio: "Bio pendiente de confirmar.",
        instagram: "https://www.instagram.com/ezeqcolo/",
      },
    ],
  },
};
