import classes from './let.module.css';
import Price from '../../assets/price.png';
import Prize from '../../assets/pricing-icon-2.png';
import Prise from '../../assets/pricing-icon-3.png';

const Urano = () => {
    return ( 
        <div className={classes.money}>
            <div>
            <h2>Let's get started with Urano</h2>
            <p>Nunc porta erat ut lectus posuere molestie. </p>
            </div>
            <div className={classes.price}>
                <div className={classes.price_1}>
                    <h3>Basic</h3>
                    <img src={Price} className={classes.mypen} alt="myumg" />
                    <h1>Free</h1>
                    <p>posuere</p>
                    <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel,
                         efficitur nec elit.</p>
                    <button className={classes.btn}></button>
        
            

                </div>
                <div className={classes.price_1}>
                <h3>Pro</h3>
                    <img src={Prize} className={classes.mypen} alt="myumg" />
                    <h1>$25</h1>
                    <p>posuere</p>
                    <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel,
                         efficitur nec elit.</p>
                    <button className={classes.button}>Get Registered</button>
        

                </div>
                <div className={classes.price_1}>
                <h3>Unlimited</h3>
                    <img src={Prise} className={classes.mypen} alt="myumg" />
                    <h1>$95</h1>
                    <p>posuere</p>
                    <p>Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel,
                         efficitur nec elit.</p>
                    <button className={classes.button}>Get Registered</button>
        

                </div>

            </div>

        </div>

     );
}
 
export default Urano;