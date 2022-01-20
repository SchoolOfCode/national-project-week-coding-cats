import './SetupModal.css';

function SetupModal({ isVisible, makeModalHidden, makeModalVisible }) {
  return (
    <div id="myModal" className="modal " style={{ display: isVisible }}>
      <div class="modal-content" style={{ display: isVisible }}>
        <span onClick={makeModalHidden} class="close">
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default SetupModal;
