// Footer information consolidated into separate component for ease of updating later 
function Footer() {
    return (
        <div className="text-center p-4">
            <hr />
            <p></p>
            <p>All information provided by this website has been sourced from the Transport for London Unified API.</p>

            <span>Please visit </span>
            <a 
            href="https://api.tfl.gov.uk/" 
            target="_blank"
            className="underline">
            https://api.tfl.gov.uk/</a>
            <span> for more information</span>

            <p>Copyright &copy; TfL</p>
        </div>
    )
}

export default Footer;