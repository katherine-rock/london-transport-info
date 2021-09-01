function Footer() {
    return (
        <div>
            <hr />
            <p className="footer">
                All information provided by this website has been sourced from the Transport for London Unified API.</p>

            <span>Please visit </span>
            <a href="https://api.tfl.gov.uk/" 
            target="_blank">
            https://api.tfl.gov.uk/</a>
            <span> for more information</span>

            <p>Copyright &copy; TfL</p>
        </div>
    )
}

export default Footer;