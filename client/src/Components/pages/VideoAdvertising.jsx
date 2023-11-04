import React, { useEffect, useRef, useState } from "react";


export const VideoAdvertising = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video
                .play()
                .then(() => {
                    setIsPlaying();
                })
                .catch((error) => {
                    console.error("Failed to play the video:", error);
                });

            const handleEnded = () => {
                setIsPlaying(false);
            };

            video.addEventListener("ended", handleEnded);

            return () => {
                if (video) {
                    video.removeEventListener("ended", handleEnded);
                }
            };
        }
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;

        if (video) {
            if (isPlaying) {
                video.pause();
                setIsPlaying(false);
            } else {
                video
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.error("Failed to play the video:", error);
                    });
            }
        }
    };

    return (
        <div className="w-[98%] max-w-[1300px] mx-auto pt-16 text-center">
            <div className="relative" style={{ width: "80%", margin: "auto" }}>
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
                    className="rounded-3xl"
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                </video>
                <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? (
                        <img className="w-[42px] h-[42px]" src='images/pause.png' alt="Pause" />
                    ) : (
                        <img className="w-[42px] h-[42px]" src='images/play.png' alt="Play" />
                    )}
                </button>
            </div>
        </div>
    );
};


