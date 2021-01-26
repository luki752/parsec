const baseUrl = "https://rickandmortyapi.com/api";

//people url
export const charactersUrl = (page, name, status) =>
  `${baseUrl}/character/?page=${page}&name=${name}&status=${status}`;
export const specificCharacterUrl = (id) => `${baseUrl}/character/${id}`;

//locations url
export const locationsUrl = (page, name) =>
  `${baseUrl}/location/?page=${page}&name=${name}`;
export const specificLocationUrl = (id) => `${baseUrl}/location/${id}`;

//episodes url
export const episodesUrl = (page, name, episode) =>
  `${baseUrl}/episode/?page=${page}&name=${name}&episode=${episode}`;
