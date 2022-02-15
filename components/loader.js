//imports
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'
import 'animate.css'

const Loader = () => {
    return (
        <div className='relative w-full h-screen bg-gray-200 p-0 m-0'>
            <HourglassBottomIcon className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" sx={{fontSize: 70}} />
        </div>
    )
}

export default Loader