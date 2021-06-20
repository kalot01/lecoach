export const Media = (props) => {
    return (
      <div id='media' className='text-center'>
        <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Nos Médias</h2>
        </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-xs-6 col-md-3'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    )
  }
  