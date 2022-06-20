import { showData, anotherExample } from '../src/data.js';
//importar la data o copiar una parte pequeñitav de la data


describe('showData', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
