import { useState } from 'react'

import profile from '../assets/m4h.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Hiro() {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
            {loaded ?
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
                >Loading...</div>
                :
                null
            }
            <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
                <div className='md:w-3/6 md:p-4'>
                    <img className='w-96' data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoaded(false)} />
                </div>
                <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                    <div className="flex flex-col w-full mt-8">
                        <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                        <h1 className="text-2xl font-bold">Mohamed Hosam</h1>
                        <p class="text-xl font-bold text-gray-300">Software Engineer</p>
                        <p className="text-md font-light text-gray-400 ">I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.</p>
                    </div>

                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href='https://github.com/radendi' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                        </li>
                        <li>
                            <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href='htps://linkedin.com/damasukma' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                        </li>
                    </ul>
                </div>
                {/* <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" /> */}
            </div>
        </>
    )
}
