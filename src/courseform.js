import InputForm from "./inputform"
function Courseform() {
    return(
        <>
        

        <div className="mx-auto d-block w-50 mt-5">

            <form >
                <InputForm
                labels="Username"
                formtype="text"
                placeholder = "Enter your username"
                
                />
                <InputForm
                labels="Password"
                formtype="password"
                placeholder="Enter your password"
                />
                <input type="submit" value={"Login"} className="btn btn-outline-primary me-3"/>
                <input type="reset" value={"Clear All"} className="btn btn-outline-secondary"/>
            </form>
        </div>
                
        </>
    );
}
export default Courseform;