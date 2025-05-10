import React from 'react';
//import _ from 'underscore/modules/map.js'
import _ from 'underscore';

import { MESSAGE_ROLE} from '../../utils/tec-chat.constants';

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

const ChatMessageComponent = ({ messages, loading, onDownloadDocument }) => {
  return (
    <div className="chatbox">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <div>{msg.text} { (msg.sender===MESSAGE_ROLE.SENDER_CHATBOT && msg.metadata && msg.metadata.sources.length>0 ) ? <QuoteButton onDownloadDocument={onDownloadDocument} contentPopover={msg.text.length>170?msg.text.substring(70, 170): msg.text.substring(10, 10)} docName={_.pluck(msg.metadata.sources,'fileName').join(", ")} page={10}/>: null }</div>
        </div>
      ))}
      {loading && <div className="message bot"> <img src = {loadImg} /> </div>}
    </div>
  );
};

function QuoteButton({contentPopover, docName, page, onDownloadDocument}){
  //datos cita (Apellido, ano, pagina). ejm (Arias, 2018, p.342) (NombreDoc, pagina)
  const contentPopUp = <div>"{contentPopover}..." <div className="doc-lnk" onClick={onDownloadDocument}>({docName}.docx </div>, p.{page}) </div>;

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
      <Typography className={classes.typography}>{contentPopUp}</Typography>
    </Popover>
  </>);
}


export default ChatMessageComponent;
