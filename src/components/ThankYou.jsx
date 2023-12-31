import { Link } from "react-router-dom"
import iconList from "../assets/icon-list.svg"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"


export default function ThankYou() {
  const { input } = useContext(ThemeContext)


  return (
    <section className='thank-you-page'>
      <div className="container">
        <div className="content">
          <div>
            <img src={iconList} alt="checkmark icon" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="email">{input}</span>.
              Please open it and click the button inside to confirm your subscription.
            </p>
          </div>
          <div className="link-to-home">
            <a href="/">Dismiss message</a>
          </div>
        </div>
      </div>
    </section>
  )
}
