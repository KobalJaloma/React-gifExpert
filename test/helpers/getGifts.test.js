import { getGifts } from "../../src/helpers/getGifts";

describe('Test in GetGifts', () => { 
    
    test('return a gift array', async() => { 
        const gifs = await getGifts('Naruto');
        console.log(gifs);
        expect(gifs.length ).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })