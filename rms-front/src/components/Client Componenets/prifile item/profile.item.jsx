import './profile.item.css'

function ProfileItem({imageLink}) {
    return ( <div className="img-container"><img className='profile-image' width="60" src={imageLink} alt="Logo"/></div> );
}
export default ProfileItem;