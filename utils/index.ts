import { format } from 'date-fns';

const formatTime = (time: Date | number) => {
    console.log('time', time)
    try {
        return format(time, 'kk:mm:ss O')
    } catch (e) {
        console.log(e)
    }

}
export {
    formatTime
}