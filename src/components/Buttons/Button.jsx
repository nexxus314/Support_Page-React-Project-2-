import styles from "./Button.module.css";

const Buttons = ({isOutline,icon,text,...rest}) => {
    
  return (
    <button 
    
    
    {...rest}className={isOutline?styles.outline_btn:styles.message_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Buttons;
