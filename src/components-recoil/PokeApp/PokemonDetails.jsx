import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonDetailState, pokemonSelectedState } from './Main';

const PokemonDetails = () => {
  const pokemonSelected = useRecoilValue(pokemonSelectedState);
  const pokemonDetailsValue = useRecoilValue(pokemonDetailState);
  return (
    <>
      {pokemonSelected ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <span
            style={{
              fontSize: '24px'
            }}
          >
            {pokemonSelected}
          </span>
          <table width={100}>
            <thead>
              <tr>
                <th>Height</th>
                <th>Experience</th>
                <th>Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pokemonDetailsValue.height}</td>
                <td>{pokemonDetailsValue.base_experience}</td>
                <td>
                  {pokemonDetailsValue.types.map(({ type }) => (
                    <p key={type.name}>{type.name}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default PokemonDetails;
