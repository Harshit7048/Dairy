export default function UserLogin() {
    return <div className="user-login">
        <div className="user-login-form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
        </div>
        <div className="user-login-form">
            <label htmlFor="username">Password</label>
            <input type="text" name="password" />
        </div>
        <button className="login-btn">Submit</button>
    </div>;
}