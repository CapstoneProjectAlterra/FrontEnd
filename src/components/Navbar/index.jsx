import { Link } from 'react-router-dom';
import { LogoPrimary } from "../../assets"
import style from './Navbar.module.css';
import { CustomButton } from '..';

function Navbar() {
    return(
    <>
        <div className={style.Navbar}>
            <img src={LogoPrimary} alt="logo" className={style.logo}/>
            <div className={style.navlink}>

            <CustomButton variant="secondary">
              <Link
                to="/login">
                Login
               </Link>
            </CustomButton>

            <CustomButton variant="secondary">
              <Link
                to="/register">
                Register
               </Link>
            </CustomButton>

            </div>
            </div>
  </>
);
}
export default Navbar;