const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 1rem',
    textAlign: 'center',
    maxWidth: '600px',
    '&:hover $editBtn': {
      opacity: 1,
    },
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
};

export default styles;
