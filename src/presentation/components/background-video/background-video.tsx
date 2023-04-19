export const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-black">
      <div className="absolute top-0 left-0 bg-zinc-900 bg-opacity-40 w-full h-screen" />
      <video autoPlay loop muted playsInline className="object-cover w-full h-screen" aria-hidden="true">
        <source src="./video/background-video.mp4#t=0.1" type="video/mp4" />
      </video>
      <p className="text-gray-200 bg-zinc-900 bg-opacity-40 absolute bottom-0 right-2 text-right" aria-hidden="true">
        Game engine footage showing character Blade
      </p>
    </div>
  )
}
