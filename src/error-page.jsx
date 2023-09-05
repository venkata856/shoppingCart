import { useRouteError } from "react-router-dom";

export default function ErrorPage(){

const error = useRouteError();

return(<>
   <div id="error">
    <h1>oops!!</h1>
    <p>something went wrong..</p>
    <p>
    <i>{error.statusText || error.message}</i>
    </p>
   </div>
</>)

}