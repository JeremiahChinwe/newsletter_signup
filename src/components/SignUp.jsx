import mobile from "../assets/illustration-sign-up-mobile.svg"
import desktop from "../assets/illustration-sign-up-desktop.svg"
import iconList from "../assets/icon-list.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"


export default function Hero() {
    const { input, setInput } = useContext(ThemeContext)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const handleChange = (e) => {
        setInput(e.target.value)
        if (!input.match(validRegex)) {
            setMessage("Valid email required")
        } else {
            setMessage("Correct Email 👍")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("thankyou")
    }


    return (
        <section className="main_section">
            <div className="container">
                <div className="box">
                    <div className="images">
                        <img src={mobile} alt="illustration icon" className="mobile-img" />
                        <img src={desktop} alt="illustration icon" className="desktop-img" />
                    </div>
                    <div className="sign_up">
                        <h1>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <p><img src={iconList} alt="checkmark icon" /> Product discovery and building what matters</p>
                        <p><img src={iconList} alt="checkmark icon" /> Measuring to ensure updates are a success</p>
                        <p><img src={iconList} alt="checkmark icon" /> And much more!</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form_details">

                                <label htmlFor="email">Email address
                                    <span>{input && <span
                                        className={`${message === "Valid email required" ? "invalid_email" : message === "Correct Email 👍" ? "valid_email" : ""} }`}
                                    >
                                        {message}
                                    </span>
                                    }</span>
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    value={input}
                                    onChange={handleChange}
                                    placeholder="email@company.com"
                                    className={`${input && message === "Valid email required" ? "wrong_input" : ""}`}
                                    required
                                    autoFocus
                                />
                                {input && <span>{message === "Correct Email 👍" ? "" : "Example: johndeo@gamil.com"}</span>}
                                <button>Subscribe to monthly newsletter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}