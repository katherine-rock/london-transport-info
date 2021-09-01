import header_icon from '../../images/header_icon.png';

// Header in separate component for ease of updating later 
function Header() {
    return (
        <div className="w-screen bg-blue-600 flex flex-col justify-center pl-4 pr-4 md:pl-16 md:pr-16">
            <div className="flex flex-row items-center justify-center p-4">
                <h1 
                className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl p-4">
                London Traffic Report</h1>

                <img 
                src={header_icon} 
                alt="right turn street sign"
                className="max-h-36"/>
            </div>


            <h2 className="text-white text-xl flex flex-row justify-center p-4 xw-screen sm:text-2xl md:text-3xl">
                Avoid all the latest traffic incidents around London to make your next journey a breeze!
            </h2>
        </div>
    )
}

export default Header;