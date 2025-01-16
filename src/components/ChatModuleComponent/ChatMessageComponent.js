import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import loadImg from '../../assets/img/load.svg';
import { MdFormatQuote } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    maxWidth: 200,
    textAlign:theme.center
  },
}));

const ChatMessageComponent = ({ messages, loading }) => {
  return (
    <div className="chatbox">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <p>{msg.text} {msg.sender==='bot' && <QuoteButton contentPopover=''/>}</p>

        </div>
      ))}
      {loading && <div className="message bot"> <img src = {loadImg} /> </div>}
    </div>
  );
};

function QuoteButton({contentPopover, inversion, recive}){
  //datos cita (Apellido, ano, pagina). ejm (Arias, 2018, p.342) (NombreDoc, pagina)
  contentPopover = '"mineros para acceder al derecho de preferencia son los siguientes: 1. Ser beneficiarios de contratos mineros de pequeña minería en áreas de aporte..." (EjemploRespuestas.docx, p.10)';

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return(<>
    {/*<Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> Open Popover </Button>*/}
    <MdFormatQuote type="button" className="quote-btn" title="Cita narrativa" onClick={handleClick}/>
    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Typography className={classes.typography}>{contentPopover}</Typography>
    </Popover>
  </>);
}

export default ChatMessageComponent;
