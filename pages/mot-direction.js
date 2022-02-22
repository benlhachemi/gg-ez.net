//imports
import Header from '../components/header'
import Navbar from '../components/navbar'

const MotDirection = () => {

    //main render
    return (
        <div>
            <Header />
            <Navbar />
            <div className="w-full py-2 text-center px-5 lg:w-5/6 lg:py-10 lg:px-10 mx-auto">
                <h1 className="text-center text-2xl lg:text-5xl text-gray-700 font-bold mt-4">Mot de la Direction</h1>
                <p className='text-gray-800 text-md font-semibold mt-7'><span className='font-bold text-6xl'>L</span> orem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vero doloribus quasi alias voluptate molestiae at ea officia nemo magni. Dicta voluptate molestiae repellendus assumenda accusamus ex necessitatibus nostrum repellat!</p>
                <p className='text-gray-800 text-md font-semibold mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi vero doloribus quasi alias voluptate molestiae at ea officia nemo magni. Dicta voluptate molestiae repellendus assumenda accusamus ex necessitatibus nostrum repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit a alias quae aspernatur enim et vero accusantium eius nesciunt veniam earum aliquam id exercitationem temporibus, soluta minima ab adipisci.</p>
                <p className='text-gray-800 text-md font-semibold mt-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, odio aspernatur delectus laboriosam obcaecati magnam nihil nam consequuntur voluptatem voluptas. Vitae vero, quaerat veniam asperiores quam molestias minima deserunt repellendus.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti facilis, est distinctio minima dolore. Reiciendis quia velit cupiditate? Doloremque, dolore. Culpa asperiores nulla eligendi iusto rem quae praesentium natus?</p>
            </div>
        </div>
    )
}

export default MotDirection