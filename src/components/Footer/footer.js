import classes from './footer.module.css';
import Urano from '../../assets/logo-white.png';
import Social from '../../assets/Social.png';
const Footer = () => {
    return (  
        <div className= {classes.footer}>
            <div className= {classes.footer_1}>
                <div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    

                </div>
                <div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>
                <div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>

            </div>
            <div className= {classes.footer_2}>
                <div className={classes.foot}>
                <img src={Urano} className={classes.myfooter} alt="myumg" />
          
                    <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed,
                         malesuada id metus.</p>
                <img src={Social} className={classes.myfooter} alt="myumg" />
          

                </div>
                <div className={classes.feet}>
                    <div>
                        <h2>Company</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h2>Information</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h2>Patner</h2>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>

                </div>

            </div> 
            
        </div>
    );
}
 
export default Footer;