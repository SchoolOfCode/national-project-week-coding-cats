import './SetupModal.css';
import Form from './Form';

function SetupModal({ isVisible, makeModalHidden, getData }) {
  // Function for hiding Modal when form is submitted
  function submitForm() {
    makeModalHidden();
  }

  return (
    <div id="myModal" className="modal" style={{ display: isVisible }}>
      <div class="modal-content" style={{ display: isVisible }}>
        <span onClick={() => makeModalHidden()} class="close">
          &times;
        </span>
        <Form submitForm={submitForm} getData={getData} />
      </div>
    </div>
  );
}

export default SetupModal;
