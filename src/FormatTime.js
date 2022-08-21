const FormatTime=({timeLeft})=>{
    const getSecond = `0${timeLeft % 60}`.slice(-2);
    const minutes = `${Math.floor(timeLeft / 60)}`;
    const getMinute = `0${minutes % 60}`.slice(-2);

    return ` ${getMinute} : ${getSecond} `;
}
export default FormatTime