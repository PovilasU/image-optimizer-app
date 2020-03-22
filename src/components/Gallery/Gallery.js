import React from 'react';
import PlanetNoLazy from './PlanetNoLazy';

import Sun from '../../img/planets/sun.jpg';
import Mercury from '../../img/planets/mercury.jpg';
import Venus from '../../img/planets/venus.jpg';
import Earth from '../../img/planets/earth.jpg';
import Mars from '../../img/planets/mars.jpg';
import Jupiter from '../../img/planets/jupiter.jpg';
import Saturn from '../../img/planets/saturn.jpg';
import Uranus from '../../img/planets/uranus.jpg';
import Neptune from '../../img/planets/neptune.jpg';
// Dwarf planets
import Ceres from '../../img/planets/Ceres_dwarf_planet.jpg';
import Pluto from '../../img/planets/pluto.jpg';
import Haumea from '../../img/planets/haumea_dwarf_planet.jpg';
import Makemake from '../../img/planets/makemake_dwarf_planet.jpg';
import Eris from '../../img/planets/eris_dwarf_planet.jpeg';

export default function Gallery(props) {
  return (
    <div>
      <p>No lazy loading (images formant jpg) {props.name}</p>
      <PlanetNoLazy
        planet={Sun}
        alt="Image of the sun"
        description="The Sun is the star at the center of the Solar System"
      />
      <PlanetNoLazy
        planet={Mercury}
        alt="Mercury"
        description="Mercury is the smallest and innermost planet in the Solar System."
      />
      <PlanetNoLazy
        planet={Venus}
        alt="Venus"
        description="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty."
      />
      <PlanetNoLazy
        planet={Earth}
        alt="Earth"
        description="Earth is the planet we live on. It is the third planet from the Sun. It is the only planet known to have life on it"
      />
      <PlanetNoLazy
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
      />
      <PlanetNoLazy
        planet={Ceres}
        alt="Ceres"
        description="Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter."
        dwarf={true}
      />
      <PlanetNoLazy
        planet={Jupiter}
        alt="Jupiter"
        description="Jupiter is the fifth planet from the Sun and the largest in the Solar System. "
      />
      <PlanetNoLazy
        planet={Saturn}
        alt="Saturn"
        description="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter."
      />
      <PlanetNoLazy
        planet={Uranus}
        alt="Uranus"
        description="Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
      />
      <PlanetNoLazy
        planet={Neptune}
        alt="Neptune"
        description="Neptune is the eighth and farthest known planet from the Sun in the Solar System."
      />
      <PlanetNoLazy
        planet={Pluto}
        alt="Pluto"
        description="Pluto is an icy dwarf planet in the Kuiper belt"
        dwarf={true}
      />
      <PlanetNoLazy
        planet={Haumea}
        alt="Haumea"
        description="Haumea is a likely dwarf planet located beyond Neptune's orbit."
        dwarf={true}
      />
      <PlanetNoLazy
        planet={Makemake}
        alt="Makemake"
        description="Makemake is a likely dwarf planet and perhaps the second largest Kuiper belt object in the classical population"
        dwarf={true}
      />
      <PlanetNoLazy
        planet={Eris}
        alt="Eris"
        description="Eris is the most massive and second-largest known dwarf planet in the Solar System."
        dwarf={true}
      />
      <PlanetNoLazy
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
        dwarf={true}
      />
    </div>
  );
}
