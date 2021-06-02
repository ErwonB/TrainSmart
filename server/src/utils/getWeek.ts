export function getWeek(myDateStr: string) {
  const myDate = new Date(myDateStr);
  let tdt = new Date(myDate.valueOf());
  let dayn = (myDate.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  let firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  let weeknum;
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
  }
  weeknum = 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000);

  return weeknum;
}
