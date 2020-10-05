const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem 1rem 1rem 1rem',
    textAlign: 'center',
    maxWidth: '600px',
    '& h1': {
      marginBottom: '1rem',
    },
    '& p': {
      marginBottom: '1rem',
    },
    '&:hover $editBtn': {
      opacity: 1,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  editBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    border: '1px solid #F50057',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
  },
});

export default styles;
