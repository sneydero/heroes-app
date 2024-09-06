import { heroes } from '../data/heroes';

export const getHeroesByName = ( name ) => {
    
    if(name.length === 0) return [];
   
    return heroes.filter( heroe => 
        heroe.superhero
        .trim()
        .toLocaleLowerCase()
        .includes(name.trim().toLocaleLowerCase()));
};