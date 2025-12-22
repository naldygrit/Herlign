

export const VentureBanner = () => {
    return (
        // <div className="w-full py-16 md:py-24 bg-indigo-200 relative overflow-hidden flex items-center justify-center">
        //      {/* Background Image simulating the crowd of women */}
        //      <div 
        //         className="absolute inset-0 z-0 opacity-40"
        //         style={{
        //             backgroundImage: "url('https://picsum.photos/id/1027/1200/400')",
        //             backgroundSize: 'cover',
        //             backgroundPosition: 'center',
        //             filter: 'grayscale(30%) sepia(20%)'
        //         }}
        //      ></div>
             
        //      {/* Overlay card */}
        //      <div className="bg-green-100/90 backdrop-blur-sm z-10 p-10 md:p-14 rounded-[3rem] shadow-xl max-w-2xl mx-4 text-center">
        //          <div className="scale-125">
        //             <Logo />
        //          </div>
        //      </div>
        // </div>
        <div className='flex overflow-hidden'>
            <img src='/images/banner-img.png' alt='banner' className='w-full object-cover ' />
        </div>
    )
}