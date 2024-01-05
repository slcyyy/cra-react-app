/**
 * dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

 */

function dateFormat(date, template) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let res = template
    .replace(/yyyy/, year)
    .replace(/MM/, month)
    .replace(/dd/, day);

  return res;
}

console.log(dateFormat(new Date("2020-12-01"), "yyyy/MM/dd"));
