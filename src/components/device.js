const size = {
    mobileXs: "280px",
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    mobileXl: "540px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  };
  
  export const device = {
    mobileXs: `(min-width: ${size.mobileXs})`,
    mobileS: `(max-device-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobileXl: `(min-width: ${size.mobileXl})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };