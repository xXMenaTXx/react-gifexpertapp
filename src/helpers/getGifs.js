export const getGifs = async (category) => {

    // const apiKey = 'n8f47dA4Iw1V4OB3g8jvej4jTEKrKqRh';

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&apiKey=n8f47dA4Iw1V4OB3g8jvej4jTEKrKqRh`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}