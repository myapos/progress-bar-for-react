/* ref: 
playground: https://cssinjs.org/repl/ 
docs: https://cssinjs.org/jss-plugin-nested/?v=v10.9.0
wikipedia: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
*/
export const styles = {
  tooltip: {
    position: 'relative',
    display: 'flex',
    minWidth: '150px',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      '& $tooltiptext': {
        display: 'block',
      },
    },
  },
  tooltiptext: {
    display: 'none',
    width: 'auto',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'left',
    borderRadius: '6px',
    padding: '5px',
    bottom: '150%',

    // Position the tooltip
    position: 'absolute',
    zIndex: 1,
    '&::after': {
      content: "' '",
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'black transparent transparent transparent',
    },
  },
};
