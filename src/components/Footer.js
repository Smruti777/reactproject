import '../App.css';

function Footer(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Whoop Shopping App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Footer;