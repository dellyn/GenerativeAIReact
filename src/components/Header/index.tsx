import { Logo } from "../../assets/Logo";
import './styles.scss'
export const Header = () => {


    return (
        <header className='header-container'>
            <div className="logo-container">
                <Logo />
            </div>
        </header>
    );
};
