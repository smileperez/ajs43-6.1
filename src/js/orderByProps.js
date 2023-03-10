export default function orderByProps(obj, pattern) {
  // Сортируем объект, получаем сортированный массив
  const sortedArr = Object.keys(obj).sort();
  // Объединяем pattern с полученным сортированным массивом
  const concatedArr = pattern.concat(sortedArr);

  const uniqueSet = [];
  const result = [];

  for (const prop in concatedArr) {
    if (!uniqueSet.includes(concatedArr[prop])) {
      uniqueSet.push(concatedArr[prop]);
    }
  }

  for (let i = 0; i < uniqueSet.length; i += 1) {
    for (const prop in obj) {
      if (uniqueSet[i] === prop) {
        result[i] = { prop, value: obj[prop] };
      }
    }
  }

  return result;
}
