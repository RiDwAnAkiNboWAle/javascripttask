const bills = [22,295,176,440,37,105,10,1100,86,52]

const tips =[]
const totals = []

const calcTip = function (bills) {
  return bills >=50 && bills <= 300 ? bills* 0.15 : bills* 0.2

}
for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip+bills[i])
}
console.log(tips , bills, totals)