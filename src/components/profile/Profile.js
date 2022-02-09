import PropTypes from "prop-types";


function Profile({ className, username, tag, location, avatar, stats }) {
    // props = { className, username, tag, location, avatar, stats };
 
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar }
                alt="User avatar"
                className="avatar"
                style={{height: "200px"}}
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers: </span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views: </span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes: </span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    }).isRequired,

}


export default Profile