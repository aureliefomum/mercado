import DashBoardNav from "../components/DashBoardNav";
import ConnectNav from "../components/ConnectNav";



const DashboardSeller = () => {
    return (
        <>

        <div className="container-fluid bg-secondary p-5">
             <ConnectNav />
        </div>

        <div className="container-fluid p-4">
            <DashBoardNav />
        </div>


        <div className="container">
            <p>Show all hotels posted and button to add new post</p>
        </div>



        </>
    );
}

export default DashboardSeller;