
import React from 'react'
import galleryImages from './galleryImages'
import Masonary,{ResponsiveMasonry} from 'react-responsive-masonry'

const MasonaryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonary gutter='1rem'>
        {
            galleryImages.map((item,index)=>(
                <img 
                className='masonary_img'
                src={item} 
                key={index}
                 alt="" 
                 style= {{'width':'100%','display':'block','borderRadius':'10px'}}
                  />
            ))
        }
        </Masonary>

    </ResponsiveMasonry>
  )
}

export default MasonaryImagesGallery