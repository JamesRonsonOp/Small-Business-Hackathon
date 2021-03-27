import './styles.css';

const Reservations = () => {

    return (
        <div className="reservation-container">
            <div className="center-container">
                <div className="view-container">
                    <p className="view-seat"><img src="https://res.cloudinary.com/gregdusek/image/upload/v1616678564/Hackathon%20files/iconfinder_map_2561464_e4f0po.svg" className="view-icon" alt=""/>Seat Map View</p>
                    <p className="view-time"><img src="https://res.cloudinary.com/gregdusek/image/upload/v1616678659/Hackathon%20files/Timeline_3_zjzdc1.svg" alt="" className="view-icon" />Timeline View</p>
                </div>
                <div className="layout-container">
                    <img src="https://res.cloudinary.com/gregdusek/image/upload/v1616686850/Hackathon%20files/Reservation_Floor_Plan_qlusf2.png" className="layout-image" alt="" />
                    <div className="footer-container">
                        <p className="upload-text"><img src="https://res.cloudinary.com/gregdusek/image/upload/v1616697949/Hackathon%20files/iconfinder_export-share-upload_2931143_amx1hu.svg" className="footer-icon" alt="" />Upload New</p>
                        <p className="delete-text"><img src="https://res.cloudinary.com/gregdusek/image/upload/v1616697949/Hackathon%20files/iconfinder_essential_set_close_1110973_ss4pjk.svg" className="footer-icon" alt="" /> Delete</p>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="date-time-container">
                    <h2 className="date-title">(Thurs, Mar 25)</h2>
                    <div className="time-container">
                        <p className="time-text">7:05</p>
                        <div className="day-night">
                            <p className="day-text">AM</p>
                            <p className="night-text">PM</p>
                        </div>
                    </div>
                </div>
                <div className="seats-container">
                    <div className="requests-container">
                        <h2 className="request-title">Pending Requests</h2>
                        <img className="request-icon" alt="" />
                        <img className="request-dropdown" alt="" />
                    </div>
                    <div className="available-container">
                        <img className="green-icon" alt="" />
                        <h2 className="available-title">Available Seats</h2>
                        <img className="available-dropdown" alt="" />
                    </div>
                    <div className="reserved-container">
                        <img className="red-icon" alt="" />
                        <h2 className="reserved-title">Reserved Seats</h2>
                        <img className="reserved-dropdown" alt="" />
                    </div>
                    <div className="occupied-container">
                        <img className="grey-icon" alt="" />
                        <h2 className="occupied-title">Occupied Seats</h2>
                        <img className="occupied-dropdown" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reservations;