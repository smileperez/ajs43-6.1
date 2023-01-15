import orderByProps from './orderByProps';

const obj = {
  health: 10,
  level: 2,
  attack: 80,
  name: 'мечник',
  defence: 40,
};
const pattern = ['name', 'level'];

console.log(orderByProps(obj, pattern));
