export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>

        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              // <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
              //   {' '}
              //   <i className={d.icon}></i>
              //   <h3>{d.title}</h3>
              //   <p>{d.text}</p>
              // </div>
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 uk-inline">
                {' '}
                <i className={`"uk-button uk-button-default" ${d.icon}`}></i>
                <div data-uk-dropdown="pos: bottom-center">{d.text}</div>
                <h3 className="feature-title">{d.title}</h3>
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
