
import profilePicture from '../data/prof_profile.jpg'
import "../CSS_components/header.css"
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
            
              <div className='col-md-8 col-md-offset-2 intro-text'>
                
                <img id="profile_picture" src={profilePicture}></img>
                <h1>
                  
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  See More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
