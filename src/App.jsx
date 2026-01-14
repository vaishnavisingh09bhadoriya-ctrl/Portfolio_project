import './App.css'


function App() {
  return (
    <div className=" min-h-screen  font-serif text-gray-900 antialiased">
      <div className=" max-w-6xl mx-auto px-6 py-10">
        

        <header className="sticky top-0 z-50 bg-pastel-cream  flex  justify-between mb-6 ">
          <div className="  flex items-center gap-3">
           <span className='font-extrabold text-lg'> VAISHNAVI</span>
          </div>
          <div className=' flex justify-center gap-8 text-sm'>
           <div className='text-shadow-lg'>home</div>
           <div className='text-shadow-lg'>About</div>
           <div className='text-shadow-lg'>contact me</div>
          </div>

          
        </header>

        <main>
          <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 px-6 py-2
">
<div className='relative  isolate bg-pastel-cream  h-64 w-64 '>
                <img src='https://www.shutterstock.com/shutterstock/videos/3710958393/thumb/9.jpg?ip=x480'
                className='absolute inset-0 w-full h-full object-cover bg-pastel-cream-500 mix-blend-multiply  ' alt='Picture'></img>
              </div>
           

            <div className=' font-extrabold text-6xl text-center px-5 py-4 '> Want to create with me?
              <p className='text-sm text-center m-8  py-7'>Hi! I'm a Frontend developer who creates modern, clean, interactive websites.</p>
             
              <div className='flex items-center justify-center space-x-4 m-8'>
                 <button className='text-sm btn-simple'>let's connect</button>
              <button className='text-sm btn-ghost'> see my work</button>
              </div>
              </div>
              
           
           
          </section>

          <section id="about" className="mb-6 flex  items-center justify-center gap-6 px-6">
           
             <div className='flex flex-col items-center justify-center mb-5 border-gray-300 border-2 rounded-lg px-4 shadow-lg'><div className='text-center m-5'><h1 className='font-bold text-3xl'>About me</h1></div>
             <div className='text-wrap text-shadow-sm'> <p className='text-sm py-5 px-2'>I am a Aspiring frontend developer who wants to learn and develop websites that modern. I have done diploma in computer Application and web development. Currently pursuing MCA in AI and ML. I am currently expanding my knowledge of backend systems and modern development practices in the technology sector. </p></div></div>  
              
            
            
            
          </section>

          <section id="projects" className="mb-6 px-6 flex flex-col items-center flex-wrap  justify-center overflow-x-scroll "> <div className='text-center m-8'><h1  className='font-bold text-3xl'>Skills</h1></div>
            <div className='flex flex-col gap-6 md:flex-row   '>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">HTML</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">CSS</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">JavaScript</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">DOM</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">Responsive design</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">UI development</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">Git & Github</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200" >API handeling</div>
            <div className=" mb-2 shadow-lg px-4 py-3 rounded-lg shadow-yellow-200">React</div></div>
            
          </section>

          <section id="contact" className=" flex flex-col items-center justify-center mb-8  border-gray-300 border-2 rounded-lg px-6 shadow-lg "> 
            <div className='text-center m-8'><h2  className='font-bold text-3xl text-shadow-lg'>Describe your idea?</h2></div>
            <div >
            <form className='flex flex-col items-center justify-center flex-wrap content-center'>
              <div><label for="name" >Name:</label>
            <input id="name" type='text' className='border-2 border-gray-400 m-5 rounded-lg bg-white shadow-lg'></input></div>
             <div><label for="mail" >Email:</label>
            <input id="mail" type='email' className='border-2 border-gray-400 m-5 rounded-lg bg-white shadow-lg'></input></div>
            <div>
              <label for="msg">Message:</label>
              <textarea id="msg" className='flex items-center justify-center p-9 bg-white m-5 border-2 border-gray-400 shadow-lg rounded-lg'></textarea>
            </div>
            <div className='text-center m-10 '><button className='text-center btn-simple shadow-lg border-gray-400 '>Submit</button></div>

            </form>
            </div>
           
          </section>

        </main>

        <footer className="mt-8  text-sm   ">
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
