import { GifItem } from '../../src/components/GifItem';
import { screen, render } from "@testing-library/react";

describe('Testing GifItem', () => { 
    
    const title = "RandomTitle"
    const url = "https://algo.com/"
    
    test('match in the Snapshoot', () => { 
            

        const { container } = render( <GifItem key={1} title={title} url={url}/> )
        expect( container ).toMatchSnapshot();

    })

    test('Show the image with URL and ALT correspondent', () => { 
        
        render(<GifItem title={title} url={url}/>)
        const {alt, src} = screen.getByRole('img');

        expect(alt).toBe(title);
        expect(src).toBe(url)
        
     })



 })