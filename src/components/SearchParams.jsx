import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

function SearchParams() {
  const [location, setLocation] = useState('Freedom, WI');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const breeds = [];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
            type="text"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option placeholder="Select Animal" aria-label="Select Animal" />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option placeholder="Select Breed" aria-label="Select Breed" />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
