// STYLE
import './Title.scss'
// CONTEXT
import {useContext} from 'react'
import {UserContext} from '../../context/Context'

/**
 *
 * @returns {JSX.Element} Title component
 */

const Title = () => {
  /**
   * get the data of the user from the context
   */
  const context = useContext(UserContext)
  const firstName = context?.response?.userInfos.firstName ?? undefined
  return (
    <div className="title__container">
      {context?.loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {context?.response && (
            <>
              {' '}
              <h1>
                Bonjour,
                <span className="red">{firstName}</span>
              </h1>
              <p className="objectifs">
                Félicitation ! Vous avez explosé vos objectifs hier 👏{' '}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Title
