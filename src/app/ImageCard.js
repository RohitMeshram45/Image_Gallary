"use client"



const ImageCard = ({ image }) => {

    const tags= image.tags.split(",");

    //    var {imgUrl,photographer , views, downloads, likes, categery} = personDetails;
    return (
        <div className='flex flex-col w-72 h-10 rounded-2xl my-20 gap-y-96 '>
            <div className='w-50 bg-slate-400 border-2 border-slate-450 shadow-2xl shadow-slate-600'>

                <img src={image.webformatURL}
                    className='w-72 h-60 mb-3' alt='My Image Data' />
                <div className='text-start ml-10 mb-2'>
                    <h2>Photo by {image.user}</h2>
                    <h5>view :{image.views}</h5>
                    <h5>Downloads : {image.downloads}</h5>
                    <h5>Likes : {image.likes}</h5>
                    <h5>Categery : {image.type}</h5>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 text-center items-center ml-2'>
                    {
                        tags.map((item,index)=>(
                            <h1 key={index} className='bg-gray-600 rounded-2xl w-[90px] text-center p-2 px-2'>{item.slice(0,15)} </h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageCard
