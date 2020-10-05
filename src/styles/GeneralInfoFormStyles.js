const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 1rem 1.4rem 1rem',
    maxWidth: '600px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    margin: '0',
  },
});

export default styles;
