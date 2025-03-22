const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="rights-reserved">
                <h2>
                    Copyright @{year}, All Rights Reserved by 
                    <a href="#"> Moumanis Mustapha</a>
                </h2>
                {/* <div className="home-media-icon-main-head">
                    <a href="#" target="_blank">Terms & Conditions</a>
                    <a href="#" target="_blank">Privacy Policy</a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer