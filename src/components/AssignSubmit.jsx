function AssignSubmit(props){

    return(
        <>
            <div className="darkenOverlay"></div>
            <div className="assign_submit_box_bg">
                <div className="assign_submit_box">
                    <div className="selected_file">{props.file.name}</div>
                    <textarea className="file_message" id="file_message" cols="30" rows="10" placeholder="Your message here (optional)"></textarea>
                    <div className="subButtons">
                        <button onClick={props.handleCancelSubmit} className="cancel_submit">Cancel</button>
                        <button onClick={props.onFileSubmit} className="onSubmit">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignSubmit