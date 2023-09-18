import './Header.css';
import logo from '../../images/Logo.svg';
import search from '../../images/Search.svg';

export const Header = () => {
  return(
    <header  className='header'>
      <a className='header__logo-link' href='*'>
        <img className='header__logo' src={logo} alt='Логотип Interno' />
      </a>
      <nav className='header__navigation'>
        <ul className='header__list'>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Home
            </a>
          </li>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Pages
            </a>
          </li>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Services
            </a>
          </li>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Project
            </a>
          </li>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Blog
            </a>
          </li>
          <li className='header__item'>
            <a className='header__navigation-link' href='*'>
              Contact
            </a>
          </li>
        </ul>
        <img className='header__navigation-search' src={search} alt='Иконка поиска' />
      </nav>
    </header>
  )
}