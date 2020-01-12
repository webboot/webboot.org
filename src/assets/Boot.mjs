export const View = () => [
  div({ class: 'Boot' }, [
    svg({ viewBox: '0 0 100 72' }, [
      path({
        class: 'upper',
        d: `
M1 60
c 30 -6 68 11 98 3 1 -19 2 -18 -20 -17 -8 0 -16 1 -21 -4 -13 4 -13 3 -14 2 -2 -2 -1 -2 12 -6
l -2 -3
c -13 4 -13 4 -14 2
s -1 -2 12 -5
l -2 -4
c -12 3 -12 4 -13 2 0 -3 0 -2 12 -6
l -1 -4
c -12 4 -12 3 -13 2 0 -2 -1 -2 13 -6
l -1 -4
c -12 3 -13 4 -13 2 0 -3 0 -3 13 -6 0 -6 1 -8 -4 -8
C 29 1 9 0 5 4
c 4 17 -6 35 -4 56
z
`.trim(),
      }),
      path({
        class: 'sole',
        d: `
M0 62
l 1 10
h 29
c -8 -13 22 -1 45 0 24 0 26 -2 25 -7 -31 9 -68 -9 -100 -3
z
`.trim(),
      }),
    ]),
  ])
]

export const style = vars => ({
  svg: {
    height: '5em',
  },

  '.sole': {
    fill: vars.grey,
  },
  '.upper': {
    fill: vars.red,
  },
})
