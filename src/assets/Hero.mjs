export const View = () => div({ class: 'Hero' }, [
  Boot(),
  h1([Link({ to: '/' }, '@webboot')]),
  p('trust on every step'),
])

export const style = {
  position: 'relative',
  maxWidth: '333px',
  margin: '0 auto',

  '.Boot': {
    svg: {
      height: '10em',
    },
  },
  h1: {
    fontSize: '2em',
    padding: '0',
    textAlign: 'right',
    position: 'absolute',
top: '.5em',
right: '1em',

    a: {
      textDecoration: 'none',
    },
  },
  p: {
    fontSize: '1.2em',
    padding: '0 25px 0 0',
    textAlign: 'right',
    position: 'absolute',
    top: '3em',
    width: '100%',
  },
}
