//GET GIFT OBJECTS WITH PETITION 
export const getGifts = async(category) => {
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QDN6KEh5kmR6zJq9J9eNMfJyoDxeMt1z&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifts;

}
