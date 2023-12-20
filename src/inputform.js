function InputForm(props) {
    return(
        <>
        <div className="mb-3">

            <label htmlFor="" className="form-label">{props.labels}</label>
            <input className="form-control" type={props.formtype} placeholder={props.placeholder} id={props.formid} name={props.nameform}/>
        </div>
        </>
    );
}
export default InputForm;