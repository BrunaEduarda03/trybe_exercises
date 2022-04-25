// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', () => {
      const expectedError = new Error('Não temos esse pokémon para você :(');
    expect(error).toEqual(expectedError);
  });

  it('retorna um pokemon que existe no banco de dados', () => {
    
  });
});