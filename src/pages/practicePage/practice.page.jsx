import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from '../../styles';
import './practice.styles.css';

function Practice() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth='small'
            style={{ marginTop: '100px' }}
            className={classes.container}
          >
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quis vel, deleniti vero veritatis atque quos
              accusantium? Eveniet velit perspiciatis sunt modi! Exercitationem,
              fugiat.
            </Typography>
          </Container>
        </div>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Secondary Action
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => {
              return (
                <Grid Item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://sources.unsplash.com/FV3GConVSss'
                      title='Image title'
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant='h5'>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde aperiam obcaecati placeat modi ullam veritatis!
                        Maiores amet harum ab quo?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            Something to give the footer a purpose
          </Typography>
        </footer>
      </main>
    </>
  );
}

export default Practice;
