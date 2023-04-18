export const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-screen" />
      <video autoPlay loop muted playsInline className="object-cover w-full h-screen" aria-hidden="true">
        <source src="./video/background-video.mp4#t=0.1" type="video/mp4" />
      </video>
      <p className="text-gray-200 bg-black bg-opacity-40 absolute bottom-0 right-2" aria-hidden="true">
        Game engine footage showing character Blade
      </p>
    </div>
  )
}
