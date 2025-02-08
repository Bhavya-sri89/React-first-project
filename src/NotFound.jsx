import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound()
{
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout( () => {
            navigate("/home");
        },5000 )
    }, [] );

    return(
        <>
        <h1>Page Not Found</h1>
        <img src ="./404notfound.jpg" height={300} width={300} />
        </>
    );
}
export default NotFound;