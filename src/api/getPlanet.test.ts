import getPlanet from "./getPlanet";

global.fetch = jest.fn() as any;

describe('getPlanet', () => {
    test('Returns planet data', async () => {
        const planet = { name: "Tatooine" };
        jest.mocked(fetch).mockResolvedValue({
            json: () => Promise.resolve(planet)
        } as any)

        const result = await getPlanet(1);

        expect(fetch).toHaveBeenCalledWith("https://swapi.dev/api/planets/1/?format=json");
        expect(result).toEqual(planet);
    })
})