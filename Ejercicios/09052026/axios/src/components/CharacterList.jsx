import { useState, useEffect } from 'react';
import { rickAndMortyService } from '../services/rickAndMortyService';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await rickAndMortyService.getCharacters(page);
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevPage = () => {
    if (info?.prev) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (info?.next) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="character-list-container">
      <h1>Personajes de Rick and Morty</h1>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!info?.prev}>
          ← Anterior
        </button>
        <span>Página {page} de {info?.pages}</span>
        <button onClick={handleNextPage} disabled={!info?.next}>
          Siguiente →
        </button>
      </div>

      <div className="character-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <h3>{character.name}</h3>
              <p>
                <span className={`status ${character.status.toLowerCase()}`}>
                  {character.status}
                </span>
                {' - '}
                {character.species}
              </p>
              <p className="location">
                <strong>Ubicación:</strong> {character.location.name}
              </p>
              <p className="origin">
                <strong>Origen:</strong> {character.origin.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!info?.prev}>
          ← Anterior
        </button>
        <span>Página {page} de {info?.pages}</span>
        <button onClick={handleNextPage} disabled={!info?.next}>
          Siguiente →
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
