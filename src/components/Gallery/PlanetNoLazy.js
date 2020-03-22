import React from 'react';

export default function Planet(props) {
  return (
    <div className="gallery">
      <a target="norefferer _blank" href={props.planet}>
        <img
          src={props.planet}
          data-src={props.planet}
          className=""
          alt={
            props.dwarf
              ? 'dwarf planet ' + props.alt
              : '' + 'planet ' + props.alt
          }
        />
      </a>
      <div className="desc">{props.description}</div>
    </div>
  );
}
