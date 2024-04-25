import React from "react";

function SignUp() {
    return(
        <div className="form">
            <h2>Sign Up</h2>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username"/><br/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email"/><br/>
            <label htmlFor="password">Password: </label>
            <input type="password"  name="password" id="password"/><br/>
            <button onClick={() => alert("You have signed up!")}>Submit</button>
        </div>
    )
}
export default SignUp;