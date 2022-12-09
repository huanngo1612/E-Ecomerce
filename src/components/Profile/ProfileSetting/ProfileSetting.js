import Helmet from "../../Helmet/Helmet";
import "./ProfileSetting.scss";
function ProfileSetting() {
  return (
    <Helmet title="My Profile">
      <div className="profile-setting-wrapper">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button>Update Profile</button>
        </form>
      </div>
    </Helmet>
  );
}

export default ProfileSetting;
