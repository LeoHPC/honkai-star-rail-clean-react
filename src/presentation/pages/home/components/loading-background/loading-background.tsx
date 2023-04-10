// Components
import { Spinner } from './spinner'

export const LoadingBackground = () => {
  return (
    <main
      className="bg-loading-background bg-top bg-cover bg-no-repeat min-h-screen flex justify-center items-center flex-col"
      data-testid="loading-page">
      <div className="border-4 border-red-600 p-1 bg-gray-200 bg-opacity-50">
        <div className="bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-4 sm:py-8 py-6 sm:px-16 px-12">
          <Spinner />
          <h1 className="sm:text-4xl text-2xl font-audio text-gray-200">Loading...</h1>
        </div>
      </div>
    </main>
  )
}
