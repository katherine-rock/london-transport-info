import header_icon from '../../images/header_icon.png';

function Header() {
    return (
        <>
            <div className="heading">
                <h1>London Traffic Report</h1>
                <img src={header_icon} alt="right turn street sign"/>
            </div>
            <h2>All the latest traffic incidents around London to make your next journey a breeze!</h2>
        </>
    )
}

export default Header;