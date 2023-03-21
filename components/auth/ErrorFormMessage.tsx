
const ErrorFormMessage = ({children}:{children:string}) => {
  return (
    <p role="alert" className="text-red-500">{children}</p>
  )
}

export default ErrorFormMessage