

const CustomInput = (props) => {
    const {type, name, id, placeholder, className} = props
  return (
    <>
        <div className="mb-3">
            <input 
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`from-control ${className}`} 
            />
        </div>
    </>
  )
}

export default CustomInput
