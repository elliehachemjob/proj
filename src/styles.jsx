import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icons: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', //16.5
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0',
  },
  textField: {
    border: `1px solid  ""`,
    minWidth: 400,
    borderRadius: '5px',
    opacity: 0.6,

    '&:hover,&:focus': {},
  },
}));

export default useStyles;
