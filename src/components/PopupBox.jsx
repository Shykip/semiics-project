import approveIcon from "../images/approved_icon.png"
import denyIcon from "../images/missed_icon.png"

function PopupBox({ onConfirm, onCancel, onDeny }) {

  return (
    <div className="popup-container">
        <div className="popup">
            <button className="popApprove" onClick={onConfirm}> <img src={approveIcon} alt="" /> </button>
            <button className="popDeny" onClick={onDeny}> <img src={denyIcon} alt="" /> </button>
            <button className="popCancel" onClick={onCancel}>Cancel</button>
        </div>
    </div>
  );
}

export default PopupBox