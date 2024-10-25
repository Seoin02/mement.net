export default function timeToKoreaTime(time: Date) {
    const koreaTime = new Date(time).toLocaleString();
    return koreaTime;
  };