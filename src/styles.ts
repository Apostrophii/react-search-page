import { StyleSheet, css } from 'aphrodite';

export const styles = StyleSheet.create({
  paragraph: {
    marginBottom: '22px',
  },
  aside: {
    fontSize: '80%',
  },
  link: {
    cursor: 'pointer',
    color: 'black',
    borderBottom: '2px solid black',
    ':hover': {
      color: '#089979',
      borderColor: '#089979',
    },
  },
});
