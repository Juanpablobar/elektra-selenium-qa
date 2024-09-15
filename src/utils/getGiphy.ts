import addContext from 'mochawesome/addContext';

import { selectRandomItem } from './selectRandomItem'

export const getGifs = async () => {
    const listOfGoodQuerys = ['dev', 'champions', 'yeah', 'congrats', 'nice', 'puppies', 'party']
    const listOfBadQuerys = ['sorry', 'better luck', 'not good', 'disappointment', 'sad', 'disaster']
    const selectList = listOfGoodQuerys
    const selectQuery = encodeURI(selectList[selectRandomItem(selectList?.length)])
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rydo4KhECgSC8DpckAnecv1okNNC2kGZ&q=${selectQuery}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const getRandomElement = await data[selectRandomItem(data?.length)]
    const getUrl = await getRandomElement?.images?.original?.url
    const cleanUrl = await getUrl?.split('giphy.gif')[0].concat('giphy.gif')

    describe(`Don't be shy! Click Me!`, () => it("😎", function () { 
      addContext(this, cleanUrl)
    }) )
}