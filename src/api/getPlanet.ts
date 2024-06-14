export default async function getPlanet(planetNumber: number): Promise<{name: string}> {
    const url = `https://swapi.dev/api/planets/${planetNumber}/?format=json`;

    const response = await fetch(url);
    return await response.json()
}
