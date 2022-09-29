
import axios from 'axios';
import { TimeResponse } from 'types/TimeResponse';


const getWorldTime = async () => {
  const res = await axios
    .get<TimeResponse>('https://worldtimeapi.org/api/ip')
  return res.data.datetime
}

const getPoke = async (id: any) => {
  const res = await axios("https://pokeapi.co/api/v2/pokemon/" + id)
  return res.data
}

const getPageData = async (id: any): Promise<any> => {
  const [poke] = await Promise.all([getPoke(id)])
  return {
    ...poke,
    datetime: new Date().getTime()
  }
}

export {
  getPageData
}