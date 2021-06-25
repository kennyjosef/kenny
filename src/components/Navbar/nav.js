import classes from "./nav.module.css"
const Navbar = () => {
    return (
      <nav className= {classes.nav}>
        <ul>
          <li>
            <a href="/">Features </a>
          </li>
          <li>
            <a href="/">Pricing </a>
          </li>
          <li>
            <a href="/">Login </a>
          </li>
          <button className={classes.button}>Sign Up</button>
        </ul>
        
        
  
        
      </nav>
    );
  };
  
  export default Navbar; 