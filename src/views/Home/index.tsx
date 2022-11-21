import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import { StyledHome } from '../../styles/home';
import { Button } from 'antd';

export default function Home() {
    type Artists = {
        images?: any
        name?: string
    }
    const [artist, setArtist] = useState<Artists>({images: [{url: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}]});

    const favouriteArtists = ['5mpGJkS7oU3kb0XzS3d6Fd', '7ke8cACYdga2OO34MrKNWW', '3sxuSPGJrQXReGDnPAc9ST', '5SRSf2cIr3j9VEEEwszhfq', '59LAH9h0jZrDTswZo0SNBI', '5BcIT3WAI8aGtw7yC2Tfpd', '2lCkjHUBI15zExDre7ybIQ']

    const fetchData = async () => {
        const {data} = await axios.get('/artists/', {
            params: {
                ids: favouriteArtists[Math.floor(Math.random()*favouriteArtists.length)]
              }
        })
        setArtist(data?.artists[0]);
    };

    useEffect(() => {
        fetchData();
    }, [])


    return <StyledHome>
        <div className='flex flex-row flex-wrap gap-14'>
            <div className='flex-1 basis-1/6'>
                <h2 className="text-2xl font-bold">Popular Artist</h2>
                <div className="dark:bg-neutral-900 p-6 rounded-[10px] cursor-pointer">
                    <img src={artist?.images[0]?.url} alt="artist-img" className='h-32 w-32 object-cover rounded-full' />
                    <h2 className="text-3xl mt-4 mb-2 font-bold">{artist?.name}</h2>
                    <button className='rounded-full p-1 uppercase tracking-widest w-20 bg-[#070707c7]'>Artist</button>
                </div>
            </div>
            <div className="flex-1 basis-1/2">
                <h2 className="text-2xl font-bold">Popular Track</h2>
                <div className="dark:bg-neutral-900 h-72 p-6 rounded-[10px]">01</div>
            </div>
        </div>
    </StyledHome>
}