import { Image } from "./image";
import "./gallery.css";
export const Gallery = (props) => {

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
            Take a look at the relevant projects I have tackled so far!
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}
                    url={d.url} />
                </div>
              ))
              : 'Loading...'}
            
          </div>

        </div>
      </div>
    </div>
  )
}
