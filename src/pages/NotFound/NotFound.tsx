// STYLE
import './NotFound.scss'
// utils from react router dom
import {Link} from 'react-router-dom'

/**
 * Is returned when fetching the data got rejected.
 * @returns {JSX.Element} NotFound component
 */
const NotFound = () => {
  return (
    <div className="error__container">
      <div className="error__main">
        <p className="error__title">404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="error__back">
        {' '}
        Retourner sur la page d’accueil{' '}
      </Link>
    </div>
  )
}

export default NotFound
