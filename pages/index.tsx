import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import Image from "next/image"
import myPic from '../public/myPic.png'
import Design from '../public/Design.png'
import datas from '../public/datas.png'
import devOps from '../public/devops.png'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kannan Jayachandran Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
     <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 className='text-xl font-burtons'>Kannan Jayachandran</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
          </li>
          <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 rounded-md ml-8 text-white' href="#">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className='text-center p-10'>
        <h3 className='text-3xl py-2 font-medium md:text-3xl  dark:text-white'>I am</h3>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl flex-1  dark:text-teal-400'>Kannan Jayachandran</h2>
        <h3 className='text-xl py-2 font-medium md:text-3xl  dark:text-white'>Aspiring data scientist</h3>
      </div>

      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>

        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillInstagram/>
      </div>

      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
        <Image className='absolute h-full w-full ' alt="Description of the image" src={myPic} />
      </div>
     </section>

{/* Section 2 */}

    <section>
      <div>
        <h3 className='text-3xl py-1  dark:text-white'>Personal Details</h3>

        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
        I am <span className='text-teal-500'>Kannan Jayachandran</span> and I am a Computer Science 
        Engineering student from India specializing in <span className='text-teal-500'>Artificial 
        Intelligence</span> & <span className='text-teal-500'>Machine Learning.</span> 
        I am currently in the pre-final year of my Bachelor&apos;s degree in Technology program. 
        My passion for learning new things and sharing my knowledge drives me to spend a great deal 
        of time learning concepts of computer science in depth. I&apos;m looking forward to pursue 
        a career in <span className='text-teal-500'>data science </span>and 
        <span className='text-teal-500'> machine learning</span>.
        
        </p>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
        My interests outside of Computer Science include reading Sci-Fi books, exploring Physics, 
        and studying History. I also enjoy watching movies.
        </p>
      </div>

      <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white my-10 flex-1'>
          <Image alt="Description" src={Design} width={100} height={100}/>

          <h3 className='text-lg font-medium pt-8 pb-2'>Machine Learning</h3>
          <p className='py-2'>Playing with Algorithms and Mathematics behind them.</p>
          <h4 className='py-4 text-teal-600 '>Machine Learning Libraries I use</h4>
          <p className='text-gray-800 py-1'>Tensorflow</p>
          <p className='text-gray-800 py-1'>Pytorch</p>
          <p className='text-gray-800 py-1'>Keras</p>

        </div>

          <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white my-10 flex-1'>

          <Image className='object-center' alt="Description" src={datas} width={100} height={100}/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Data science</h3>
          <p className='py-2'>I love playing with data to unravel the secrets they hold</p>
          <h4 className='py-4 text-teal-600 '>Some tools and techniques I use</h4>
          <p className='text-gray-800 py-1'>Statistics</p>
          <p className='text-gray-800 py-1'>Machine Learning</p>
          <p className='text-gray-800 py-1'>Programming skills</p>

          </div>

          <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white my-10 flex-1'>

        <Image alt="Description" src={devOps} width={100} height={100}/>
        <h3 className='text-lg font-medium pt-8 pb-2'>DevOps</h3>
        <p className='py-2'>I am learning the basics of DevOps along with the tools</p>
        <h4 className='py-4 text-teal-600 '>DevOps tools I use</h4>
        <p className='text-gray-800 py-1'>Git</p>
        <p className='text-gray-800 py-1'>Docker</p>
        <p className='text-gray-800 py-1'>Ansible</p>

        </div>
      </div>
    </section>

      </main>
      </div>
    </>
  )
}
