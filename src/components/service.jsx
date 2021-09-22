const Service = (props) => {
    return (
        // <div key={props._key} className='col-md-4'>
        //     {' '}
        //     <i className={props.icon}></i>
        //     <div className='service-desc'>
        //         <h3>{props.name}</h3>
        //         <p>{props.text}</p>
        //     </div>
        // </div>
        <div key={props._key} className="data-uk-inline col-md-4">
            <button className="uk-button uk-button-default service-button" type="button">{props.name}</button>
            <div data-uk-dropdown="pos: bottom-center">
                <i className={props.icon} style={{marginBottom: '10'}}></i>
                <div>{props.text}</div>{props.text}
            </div>
        </div>
    );
}

export default Service;