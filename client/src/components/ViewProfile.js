import React from 'react'
import { useSelector } from 'react-redux';

const ViewProfile = () => {
    const user = useSelector((store) => store.user?.user);
    return (<>
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                <div className="data">
                    <h4>Email</h4>
                    <p>{user?.email}</p>
                </div>
                <div className="data">
                    <h4>Phone</h4>
                    <p>{user?.phone}</p>
                </div>
            </div>
        </div>
        <div className="projects">
            <h3>Projects</h3>
            <div className="projects_data">
                <div className="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="data">
                    <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div className="social_media">
            <ul>
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
        </div>

    </>
    )
}

export default ViewProfile