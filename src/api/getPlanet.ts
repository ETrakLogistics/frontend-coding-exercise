export async function getPlanet() {
    return await fetch("https://swapi.dev/api/planets/1/");
}