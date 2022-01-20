import './SetupModal.css';
import Form from './Form';

function SetupModal({ isVisible, makeModalHidden }) {
  return (
    <div id="myModal" className="modal" style={{ display: isVisible }}>
      <div class="modal-content" style={{ display: isVisible }}>
        <span onClick={() => makeModalHidden()} class="close">
          &times;
        </span>
        <Form makeModalHidden={makeModalHidden} />
      </div>
    </div>
  );
}

export default SetupModal;
