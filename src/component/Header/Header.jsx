import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2'>
            <h2 className="text-5xl font-bold">Knowledge cafe </h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;