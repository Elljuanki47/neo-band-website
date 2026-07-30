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
    youtube: "https://youtu.be/Yc30lzQd_B4?si=_2YAy67FbfpQlq5d",
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
      label: "Banda",
      href: "#banda",
    },
    {
      label: "Redes",
      href: "#redes",
    },
    {
      label: "Shows",
      href: "#shows",
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
};
