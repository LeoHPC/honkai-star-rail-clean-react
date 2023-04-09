import { ComponentWithChildren } from '@/shared/domain/models'

export const LoadingBackground = ({ children }: ComponentWithChildren) => {
  return (
    <div className="bg-loading-background bg-cover bg-no-repeat min-h-screen flex justify-center items-center flex-col">
      {children}
    </div>
  )
}
