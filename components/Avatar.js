const Avatar = ({ url, className }) => {
    return (
        <img className={`h-10 w-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer  ${className}`} src={url} alt="Profile photo" />
    )
}

export default Avatar