

function NavBar(){
    return(
/*
        <div className="navBar">
            <ul style={{backgroundColor:'#020617', height:'50px'}}>
                <li style={{display:"inline", marginLeft:'10%', color:'white'}}>About Me</li>
                <ul style={{float:'right', marginRight:'15%'}}>
                    <li style={{display: "inline", margin:'auto 5%', color:'white'}}>Home</li>
                    <li style={{display: "inline", margin:'auto 5%', color:'white'}}>Portfolio</li>
                    <li style={{display: "inline", margin:'auto 5%', color:'white'}}>Contacts</li>
                </ul>
            </ul>
        </div>
 */
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#020617]'>
            <h1 className='w-full text-3xl font-bold text-yellow-600'>About Me</h1>
            <ul className='flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Portfolio</li>
                <li className='p-4'>Resume</li>
                <li className='p-4'>Contacts</li>
            </ul>
        </div>
    );
}

export default NavBar