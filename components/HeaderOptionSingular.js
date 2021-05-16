const HeaderOptionSingular = ({ Icon, title, selected }) => {
    return (
        <div className={`flex space-x-1 items-center border-b-4 border-transparent hover:text-blue-500 hover:border-current pb-3 cursor-pointer ${selected && 'text-blue-500 border-current'}`}>
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOptionSingular
