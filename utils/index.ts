import { format } from 'date-fns';

const formatTime = (time: Date | number) => {
    try {
        return format(time, 'kk:mm:ss O')
    } catch (e) {
        console.log(e)
    }

}
export {
    formatTime
}