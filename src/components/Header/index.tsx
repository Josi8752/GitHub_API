import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header className='header'>
            <nav>
                <div className='container'>
                <Link to='/home'><h1> Github API</h1></Link>
                </div>
            </nav>
        </header>

    );
}