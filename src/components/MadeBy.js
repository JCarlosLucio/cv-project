import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function MadeBy() {
  return (
    <Typography variant="body2" align="center">
      {'By Lucio '}
      <Link color="inherit" href="https://github.com/JCarlosLucio/cv-project">
        GithubIcon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default MadeBy;
