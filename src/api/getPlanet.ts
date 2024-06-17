/**
 * Example: https://swapi.dev/api/planets/1/?format=json
 * @param planetNumber The planet to fetch - values start from 1
 * @returns The response from the Star Wars API
 */
export default async function getPlanet(planetNumber: number): Promise<{name: string}> {
    const url = `https://swapi.dev/api/planets/${planetNumber}/?format=json`;

    const response = await fetch(url);
    return await response.json()
}
