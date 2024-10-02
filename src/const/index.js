
const EARTH_SIZE = 0.1;
const MERCURY_SCALE = EARTH_SIZE / 2.6;
const VENUS_SCALE = EARTH_SIZE * 0.949;
const MARS_SCALE = EARTH_SIZE / 1.88;
const JUPITER_SCALE = EARTH_SIZE * 11.209;
const SATURN_SCALE = EARTH_SIZE * 9.449;
const URANUS_SCALE = EARTH_SIZE * 4.007;
const NEPTUNE_SCALE = EARTH_SIZE * 3.883;
const PLUTO_SCALE = EARTH_SIZE * 2; // для нормального отображения иначе его не видно  (/ 5.4)


export const SUN_SIZE = 0.1 * 2.5;


export const planetsData = {
    mercury: {
        semiMajorAxis: 0.39,
        eccentricity: 0.02,
        size: MERCURY_SCALE,
        color: "white",
        orbitPeriod: 88,
        inclination: 7,
    },
    venus: {
        semiMajorAxis: 0.72,
        eccentricity: 0.0068,
        size: VENUS_SCALE,
        color: "orange",
        orbitPeriod: 225,
        inclination: 3.4,
    },
    earth: {
        semiMajorAxis: 1.00,
        eccentricity: 0.0167,
        size: EARTH_SIZE,
        color: "blue",
        orbitPeriod: 365,
        inclination: 0,
    },
    mars: {
        semiMajorAxis: 1.52,
        eccentricity: 0.0934,
        size: MARS_SCALE,
        color: "violet",
        orbitPeriod: 687,
        inclination: 1.85,
    },
    jupiter: {
        semiMajorAxis: 5.20,
        eccentricity: 0.0489,
        size: JUPITER_SCALE,
        color: "orange",
        orbitPeriod: 4333,
        inclination: 1.3,
    },
    saturn: {
        semiMajorAxis: 9.58,
        eccentricity: 0.0555,
        size: SATURN_SCALE,
        color: "goldenrod",
        orbitPeriod: 10759,
        inclination: 2.5,
    },
    uranus: {
        semiMajorAxis: 19.22,
        eccentricity: 0.0464,
        size: URANUS_SCALE,
        color: "lightblue",
        orbitPeriod: 30685,
        inclination: 0.8,
    },
    neptune: {
        semiMajorAxis: 30.05,
        eccentricity: 0.0100,
        size: NEPTUNE_SCALE,
        color: "blue",
        orbitPeriod: 60190,
        inclination: 1.8,
    },
    pluto: {
        semiMajorAxis: 39.48,
        eccentricity: 0.248,
        size: PLUTO_SCALE,
        color: "red",
        orbitPeriod: 90500,
        inclination: 17.2,
    },
};

export const rotationPeriods = {
    mercury: 58.6 * 3600, // 58.6 часов в секундах
    venus: 243 * 3600,    // 243 часа в секундах
    earth: 24 * 3600,     // 24 часа в секундах
    mars: 24.6 * 3600,    // 24.6 часа в секундах
    jupiter: 9.9 * 3600,  // 9.9 часов в секундах
    saturn: 10.7 * 3600,  // 10.7 часов в секундах
    uranus: 17.2 * 3600,   // 17.2 часа в секундах
    neptune: 16.1 * 3600,  // 16.1 часа в секундах
    pluto: 153.3 * 3600,   // 153.3 часа в секундах
};
