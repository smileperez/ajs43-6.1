export default function orderByProps(obj, pattern) {
  // Сортируем объект, получаем сортированный массив
  const sortedArr = Object.keys(obj).sort();
  // Объединяем pattern с полученным сортированным массивом
  const conactedArr = pattern.concat(sortedArr);
  // Создаем новый коллекцию уникальных значений сортированного массива
  const newSet = new Set(conactedArr);
  // переводим коллекцию в массив
  const uniqueSet = Array.from(newSet);
  // рузультирующий массив
  const result = [];

  for (let i = 0; i < uniqueSet.length; i += 1) {
    for (const prop in obj) {
      if (uniqueSet[i] === prop) {
        result[i] = { prop, value: obj[prop] };
      }
    }
  }

  return result;
}
