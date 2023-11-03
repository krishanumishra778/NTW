import React, { useEffect, useRef, useState } from 'react';

export const VideoAdvertising = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        video.play()
            .then(() => {
                setIsPlaying(true);
            })
            .catch(error => {
                console.error('Failed to play the video:', error);
            });

        video.addEventListener("ended", () => {
            setIsPlaying(false);
        });

        return () => {
            video.removeEventListener("ended", () => {
                setIsPlaying(false);
            });
        };
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;

        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
        } else {
            video.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(error => {
                    console.error('Failed to play the video:', error);
                });
        }
    };

    return (
        <div className="w-[98%] max-w-[1300px] mx-auto pt-16 text-center">
            <div className="relative">
                <video ref={videoRef} width="90%" height="auto" className="rounded-3xl m-auto">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <button className="absolute inset-0 flex items-center justify-center w-full h-full" onClick={togglePlayPause}>
                    {isPlaying ? (
                        <img className='w-[52px] h-[52px]' src="images/pause.png" alt="Pause" />
                    ) : (
                        <img className='w-[52px] h-[52px]' src="images/play.png" alt="Play" />
                    )}
                </button>
            </div>
        </div>
    );
};
