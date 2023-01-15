import orderByProps from '../orderByProps';

test('Должен получиться сортированный объект', () => {
  const obj = {
    health: 10,
    level: 2,
    attack: 80,
    name: 'мечник',
    defence: 40,
  };
  const pattern = ['name', 'level'];

  const expected = [
    { prop: 'name', value: 'мечник' },
    { prop: 'level', value: 2 },
    { prop: 'attack', value: 80 },
    { prop: 'defence', value: 40 },
    { prop: 'health', value: 10 },
  ];

  const received = orderByProps(obj, pattern);

  expect(received).toEqual(expected);
});
