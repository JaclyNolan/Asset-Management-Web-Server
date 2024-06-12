import { FC } from "react";
import { Helmet } from "react-helmet-async";

const CreateUserPage: FC = () => {
    return (
        <>
            <Helmet>
                <title>Create User</title>
            </Helmet>
            <div>Create New User</div>
            <form>
                First Name <input></input>
                Last Name <input></input>
                Date of Birth <input type="date"></input>

            </form>
        </>
    )
}

export default CreateUserPage;