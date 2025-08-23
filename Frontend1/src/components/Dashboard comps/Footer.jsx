

import React from 'react'
import logo from '../../assets/ayush_logo2.jpg'
import { FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa6'

const Footer = () => {
	return (
		<div style={{ background: 'linear-gradient(to right, #343131, #343131)' }}>
			<div className=' max-w-[1300px]  mx-auto pt-10 text-white' >
			<div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-10 pb-5'>
				{/* fisrt */}
				<div className=' flex flex-col justify-center items-center gap-2'>
					<h1 className=' py-2 text-white text-xl'>AYUSH Startup</h1>
					<img src={logo} className='w-[100px]'/>
				</div>

				{/* second */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Quick Links</h1></div>
					<div className=' flex flex-col justify-center items-center gap-2'>
						
						<a className=' text-sm text-gray-400' href='https://www.startupindia.gov.in/' target='_blank'> Startup India </a>
						<a className=' text-sm text-gray-400' href='https://www.indiafilings.com/start-up-india?matchtype=e&device=c&campaign=21442942455&keyword=dpiit%20registration&matchtype=e&network=g&position=&location=9181834&adtype=&gad_source=1&gclid=CjwKCAiAjeW6BhBAEiwAdKltMt5_p72iOEgmneYwiZOU-R8jSJ22_KnyVsr9kTPb_HW_rgnlGtwwNRoCET8QAvD_BwE' target='_blank'> DPIIT Number  </a>
						<Link className=' text-sm text-gray-400' to='/signupstartup'>Register</Link>
						<a className=' text-sm text-gray-400' href='https://ayush.gov.in/#!/' target='_blank'> Ministry of Ayush </a>
						
					</div>
				</div>

				{/* third */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Developrs</h1></div>
					<div className=' flex flex-col justify-center items-center gap-2'>
				     	<a className=' text-sm text-gray-400' href="../Documentation.pdf" target='_blank'> Quick API </a>
				     	<a className=' text-sm text-gray-400' href="../Documentation.pdf" target='_blank'> Documentation  </a>
				     	<a className=' text-sm text-gray-400' href="../Documentation.pdf" target='_blank'> Manual </a>			
					</div>
				</div>

				{/* fourth */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Social Media</h1></div>
					<div className=' flex justify-center gap-3'>
						<a href='https://x.com/moayush?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank'><FaTwitter size={25}/></a>
						<a href='https://www.instagram.com/ministryofayush?igsh=MWtpYTBtMmFuZW5oMQ==' target='_blank'><FaInstagram size={25}/></a>
						<a href='https://m.facebook.com/moayush/' target='_blank'><FaFacebook size={25}/></a>
						<a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHj3WHKksMSAwAAAZO52EY4mrBDoD97Xn-wMQn0XPj47ctcUoNCAXAHwB3ihs-hKy26R7IEsoxUWOZ7fmTZd75_8sZWeo9lcaFbb999wDye1SmOPoIBdGfhLuTUieL7rdD69T8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fministry-of-ayush%2F' target='_blank'><FaLinkedin size={25}/></a>
						
					</div>
				</div>

			</div>
			<hr className=' pt-2'/>
			<div className=' py-2 text-center'>
				<p> © 2024 TechWorkers. All rights reserved.</p>
			</div>
		</div>
		</div>
	)
}

export default Footer