import { StyleSheet, css } from 'aphrodite';

export const styles = StyleSheet.create({
  paragraph: {
    marginBottom: '30px',
  },
  essay: {
    fontSize: '20px',
    lineHeight: '32px',
  },
  aside: {
    fontSize: '80%',
  },
  bulletPoint: {
    fontWeight: 300,
  },
  bold: {
    display: 'inline',
    marginRight: '5px',
    fontWeight: 600,
  },
  link: {
    cursor: 'pointer',
    color: 'black',
    borderBottom: '2px solid black',
    paddingBottom: '2px',
    ':hover': {
      color: '#089979',
      borderColor: '#089979',
    },
  },
  imageGroup: {
    paddingLeft: '12px',
    borderLeft: '8px solid #089979',
    lineHeight: 0,
  },
  imageTag: {
    lineHeight: 'initial',
    fontSize: '14px',
    color: '#505050',
    paddingTop: '4px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '500px',
  },
});
