import React from 'react';
import Planet from './Planet';

import Sun from '../../img/planets2/sun.webp';
import Mercury from '../../img/planets2/mercury.webp';
import Venus from '../../img/planets2/venus.webp';
import Earth from '../../img/planets2/earth.webp';
import Mars from '../../img/planets2/mars.webp';
import Jupiter from '../../img/planets2/jupiter.webp';
import Saturn from '../../img/planets2/saturn.webp';
import Uranus from '../../img/planets2/uranus.webp';
import Neptune from '../../img/planets2/neptune.webp';
// Dwarf planets
import Ceres from '../../img/planets2/Ceres_dwarf_planet.webp';
import Pluto from '../../img/planets2/pluto.webp';
import Haumea from '../../img/planets2/haumea_dwarf_planet.webp';
import Makemake from '../../img/planets2/makemake_dwarf_planet.webp';
import Eris from '../../img/planets2/eris_dwarf_planet.webp';

export default function Gallery(props) {
  return (
    <div>
      <p>With lazy loading (images formant WebP) {props.name}</p>
      <Planet
        planet={Sun}
        alt="Image of the sun"
        description="The Sun is the star at the center of the Solar System"
      />
      <Planet
        planet={Mercury}
        alt="Mercury"
        description="Mercury is the smallest and innermost planet in the Solar System."
      />
      <Planet
        planet={Venus}
        alt="Venus"
        description="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty."
      />
      <Planet
        planet={Earth}
        alt="Earth"
        description="Earth is the planet we live on. It is the third planet from the Sun. It is the only planet known to have life on it"
      />
      <Planet
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
      />
      <Planet
        planet={Ceres}
        alt="Ceres"
        description="Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter."
        dwarf={true}
      />
      <Planet
        planet={Jupiter}
        alt="Jupiter"
        description="Jupiter is the fifth planet from the Sun and the largest in the Solar System. "
      />
      <Planet
        planet={Saturn}
        alt="Saturn"
        description="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter."
      />
      <Planet
        planet={Uranus}
        alt="Uranus"
        description="Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
      />
      <Planet
        planet={Neptune}
        alt="Neptune"
        description="Neptune is the eighth and farthest known planet from the Sun in the Solar System."
      />
      <Planet
        planet={Pluto}
        alt="Pluto"
        description="Pluto is an icy dwarf planet in the Kuiper belt"
        dwarf={true}
      />
      <Planet
        planet={Haumea}
        alt="Haumea"
        description="Haumea is a likely dwarf planet located beyond Neptune's orbit."
        dwarf={true}
      />
      <Planet
        planet={Makemake}
        alt="Makemake"
        description="Makemake is a likely dwarf planet and perhaps the second largest Kuiper belt object in the classical population"
        dwarf={true}
      />
      <Planet
        planet={Eris}
        alt="Eris"
        description="Eris is the most massive and second-largest known dwarf planet in the Solar System."
        dwarf={true}
      />
      <Planet
        planet={Mars}
        alt="Mars"
        description="Mars is the fourth planet from the Sun in the Solar System and the second-smallest solid planet."
        dwarf={true}
      />
    </div>
  );
}
