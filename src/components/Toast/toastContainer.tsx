import './toast.scss'


const Toast = ({ message, type }) => {
  
    setTimeout(()=>{
        
    },3000)

    return (
      <div className={`toast ${type}`}>
        <p>{message}</p>
      </div>
    );
  };
  

  export default Toast;