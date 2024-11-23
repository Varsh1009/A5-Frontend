const Forms = () => {
    return (
        <div className="test-forms">
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                </div>

                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" placeholder="Tell us about yourself" rows={4} required ></textarea>
                </div>

                <div>
                    <label htmlFor="subscribe">
                        <input type="checkbox" id="subscribe" name="subscribe" />
                        Subscribe to newsletter
                    </label>
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>

        </div>
    );
}

export default Forms;