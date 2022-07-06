import { getNames,sortData, filterDataHouse, filterDataBook, computeStatsHouse, computeStatsBook, computeStatsCharacterBook} from '../src/data.js';

//testeando getNames
describe('getNames', () => {
  it('is a function', () => {
    expect(typeof getNames).toBe('function');
  });

  it('Debería retornar "Euan Abercrombie" para "characters"', () => {
    expect(getNames("characters")).toContain("Euan Abercrombie");
  });

  it('Debería retornar "Author" para "funFacts"', () => {
    expect(getNames("funFacts")).toContain("Author");
  });

  it('Debería retornar "Harry Potter and the Cursed Child" para "books"', () => {
    expect(getNames("books")).toContain("Harry Potter and the Cursed Child");
  });

  it('No debería retornar "Accio" para "books"', () => {
    expect(getNames("books")).not.toContain("Accio");
  });  
});

//testeando sortData
describe('sortData', () => {
  const dataExample = ["bea", "ana", "diana", "camila"];
  const dataExample2 = ["bea", "ana", "diana", "bea"];

  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Debería retornar ["ana", "bea", "camila", "diana"] para ["bea", "ana", "diana", "camila"]', () => {
    expect(sortData(dataExample,"AZ")).toEqual(["ana", "bea", "camila", "diana"]);
  });

  it('Debería retornar ["diana", "camila", "bea", "ana"] para ["bea", "ana", "diana", "camila"]', () => {
    expect(sortData(dataExample,"ZA")).toEqual(["diana", "camila", "bea", "ana"]);
  });

  it('Debería retornar ["diana", "bea", "bea", "ana"] para ["bea", "ana", "diana", "bea"]', () => {
    expect(sortData(dataExample2,"ZA")).toEqual(["diana", "bea", "bea", "ana"]);
  });

});

//testeando filterDataHouse
describe('filterDataHouse', () => {
  it('is a function', () => {
    expect(typeof filterDataHouse).toBe('function');
  });

  it('Debería retornar "Stewart Ackerley" para "Ravenclaw"', () => {
    expect(filterDataHouse([{name: "Stewart Ackerley", house: "Ravenclaw"},{name: "Avery I", house: "Slytherin"}], "Ravenclaw")).toContain("Stewart Ackerley");
  });
});

//testeando filterDataBook
describe('filterDataBook', () => {
  it('is a function', () => {
    expect(typeof filterDataBook).toBe('function');
  });

  it('Debería retornar "Stewart Ackerley" para Book "4"', () => {
    expect(filterDataBook([{name: "Stewart Ackerley", books_featured_in:[4]},{name: "Avery I", books_featured_in:[6]}], "4")).toContain("Stewart Ackerley");
  });
});

//testeando computeStatsHouse
describe('computeStatsHouse', ()=> {
  it('is a function',() => {
    expect(typeof computeStatsHouse).toBe('function');
  });

  it('Debería retornar "2" para "Gryffindor"', () => {
    expect(computeStatsHouse([{name: "Stewart Ackerley", house: "Gryffindor"},{name: "Avery I", house: "Gryffindor"}, {name: "Draco Malfoy", house: "Slytherin"}],"Gryffindor")).toBe(2);
  })
})

//testeando computeStatsBook
describe('computeStatsBook',()=> {
  it('is a function',() => {
    expect(typeof computeStatsBook).toBe('function');
  });
  
  it('Debería retornar "2" para "book 2"', ()=> {
    expect(computeStatsBook([{name: "Stewart Ackerley", books_featured_in:[2]},{name: "Avery I", books_featured_in:[2]}, {name: "Pansy Parkinson", books_featured_in:[3]}],2)).toBe(2);
  })
})

//testeando computeStatsCharacterBook
describe('computeStatsCharacterBook',()=> {
  it('is a function',() => {
    expect(typeof computeStatsCharacterBook).toBe('function');
  });
  
  it('Debería retornar "2" para "harryPotterData"', () => {
    expect(computeStatsCharacterBook([{name: "Stewart Ackerley", books_featured_in:[1, 2, 3, 4, 5, 6, 7]},{name: "Avery I", books_featured_in:[1, 2, 3, 4, 5, 6, 7]}, {name: "The fat lady", books_featured_in:[1, 2, 3]}])).toBe(2);
  })

})