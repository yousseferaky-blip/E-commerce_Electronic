import   './Contact.css'

const Contact = () => {
  return (
    <div className='Container-Contact '>
        <div className='Container-Contact-Left '>
            <h3 className='Title'><span>E</span>-commerce</h3>
            <div className='Container-Contact-Left-Info '>
                <h5><span>Address: </span>22.Cairo Street:32</h5>
                <h5><span>Phone: </span>+002 23 333</h5>
                <ul >
                    <li><i class="fa-brands fa-facebook fa-2x"></i></li>
                    <li><i class="fa-brands fa-linkedin fa-2x"></i></li>
                    <li><i class="fa-brands fa-twitter fa-2x"></i></li>
                    <li><i class="fa-brands fa-youtube fa-2x"></i></li>
                </ul>
            </div>
        </div>
        <div className='Container-Contact-Right'>
            <h3 className='Title'>About</h3>
            <div>
                <h5 >Sign Up</h5>
                <h5 >View Cart</h5>
                <h5 >Help</h5>
                <h5 >Track My Order</h5>
            </div>
        </div>
    </div>
  )
}

export default Contact