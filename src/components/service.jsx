const Service = (props) => {
    return (
        <div key={props._key} className='col-md-4'>
            {' '}
            <i className={props.icon}></i>
            <div className='service-desc'>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Service;