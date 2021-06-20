export const Partenaires = (props) => {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Nos Partenaires</h2>
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
  