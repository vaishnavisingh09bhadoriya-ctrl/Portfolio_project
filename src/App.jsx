import './App.css'


function App() {

function scrollToSection() {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
  
}


  return (
    <div  className=" min-h-screen bg-linear-to-bl from-sky-200 to-white text-gray-900   antialiased">
      <div className=" max-w-6xl mx-auto  ">
        

        <header class="hidden" className=" sticky top-0 z-50  bg-linear-to-bl from-sky-200 to-white shadow-sm  flex px-5 h-10  justify-between mb-6 ">
          <div className="  flex items-center gap-3">
           <span className='font-extrabold text-lg'> VAISHNAVI</span>
          </div>
          <div className=' flex justify-center items-center gap-8 text-sm'>
           <div  className='nav-simple  text-shadow-lg'><button onClick={() => scrollToSection("home")}><a href="#home">Home</a></button></div>
           <div  className='nav-simple  text-shadow-lg'><button  onClick={() => scrollToSection("about")}><a href="#about">About</a></button></div>
           <div  className='nav-simple text-shadow-lg'><button onClick={() => scrollToSection("contact")}><a href="#contact">Contact</a></button></div>
          </div>

          
        </header>

        <main  id="home">
          <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 px-6 py-6
">
<div className=' card relative isolate mb-5 h-64 w-64 '>
     
                
                <img src='https://static.vecteezy.com/system/resources/thumbnails/044/448/931/small/cartoon-character-with-the-desk-working-concept-illustration-free-png.png'
                className='absolute fade-bottom h-80 w-80 object-cover bg-transparen bg-blend-color' alt='Picture'></img>
              </div>
           

            <div className=' card font-extrabold text-6xl text-center px-5 py-4 '> Want to create with me?
              <p className='text-sm text-center m-8  py-7'>Hi! I'm a Frontend developer who creates modern, clean, interactive websites.</p>
             
              <div className='flex items-center justify-center space-x-4 m-8'>
                 <button className='text-sm btn-simple'> <a href='https://github.com/discussions' target='blank'>let's connect</a></button>
              <button className='text-sm btn-ghost'> <a href='https://github.com/vaishnavisingh09bhadoriya-ctrl?tab=repositories' target='blank'>see my work</a></button>
              </div>
              </div>
              
           
           
          </section>

          <section id="about" className=" card mb-6 flex  items-center justify-center gap-6 px-6">
           
             <div className='flex flex-col items-center justify-center mb-5 border-gray-300 border-2 rounded-lg px-4 shadow-lg'><div className='text-center m-5'><h1 className='font-bold text-3xl'>About me</h1></div>
             <div className='text-wrap text-shadow-sm'> <p className=' py-5 px-2 text-sm/6 md:text-lg/7'>I am a Aspiring frontend developer who wants to learn and develop websites that modern. I have done diploma in computer Application and web development. Currently pursuing MCA in AI and ML. I am currently expanding my knowledge of backend systems and modern development practices in the technology sector. </p></div></div>  
              
            
            
            
          </section>

          <section  id="projects" className=" card mb-6 px-6  flex flex-col items-center   justify-center "> <div className='text-center m-8'><h1  className='font-bold text-3xl'>Skills</h1></div>
            <div className='flex flex-wrap gap-6 md:flex-row justify-center '>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15 bg-linear-to-bl from-sky-200 to-white rounded-lg shadow-grey-100">HTML</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">CSS</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">JavaScript</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15 bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">DOM</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">Responsive design</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">UI development</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">Git & Github</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100" >API handeling</div>
            <div className=" skills mb-2 shadow-lg px-4 py-3 w-50 h-15  bg-linear-to-bl from-sky-200 to-white text-center rounded-lg shadow-grey-100">React</div></div>
            
          </section>

          <section  className=" description flex flex-col md:flex-col items-center justify-center mb-8 m-5 border-gray-300 border-2 rounded-lg px-6 shadow-lg "> 
            <div className='text-center m-8'><h2  className=' font-bold text-3xl text-shadow-lg'>Describe your <span className='text-sky-400'>idea?</span> </h2>
            <p className='mt-2 text-sm'>This is a frontend-only project. The purpose is to demostrate UI design. The form is intentionally not functional</p></div>
            <div >
            <form className='flex flex-col items-center justify-center flex-wrap content-center w-full '>
              <div className='flex flex-col md:flex-col items-center justify-center m-2 w-full'><div className='text-center mb-1'><label for="name" >Name:</label></div>
            <input id="name" type='text' className='border-2 border-gray-400 m-1  rounded-lg bg-white shadow-lg'></input></div>
             <div className='flex flex-col md:flex-col items-center justify-center m-2 w-full'><div className='text-center mb-1'><label for="mail" >Email:</label></div>
            <input id="mail" type='email' className='border-2 border-gray-400 m-1 rounded-lg bg-white shadow-lg'></input></div>
            <div className='flex flex-col md:flex-col items-center justify-center m-2 w-full'>
              <div className='text-center mb-1'><label for="msg">Message</label></div>
              <textarea id="msg" className=' p-9 bg-white m-1 border-2 border-gray-400 shadow-lg rounded-lg'></textarea>
            </div>
            <div className='text-center m-10 '><button className='text-center btn-simple shadow-lg border-gray-400 '>Submit</button></div>

            </form>
            </div>
           
          </section>

        </main>

        <footer  id="contact" className=" mt-8  text-sm   ">
          <div className='text-center m-5'><h3 className='font-bold text-3xl text-shadow-lg px-3'>Social links</h3></div>
          <div className='flex gap-10 items-center justify-center py-5 px-3'>
          <div><a href='https://www.linkedin.com/in/vaishnavi-singh-75804a362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>LinkedIn</a></div>
          <div><a href='https://github.com/vaishnavisingh09bhadoriya-ctrl' target='blank'>Github</a></div>
          <div><a href='mailto:vaishnavisingh09bhadoriya@gmail.com' target='blank'>Email</a></div>
         </div>
        </footer>

      </div>
    </div>
  )
}

export default App
