import { Button, Modal } from "antd";

const EventModal = ({ isOpen, onClose ,setEvent , event}) => {



    const handleSubmit = () => {
      // TODO: add code to save the event to the database
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        {/* <ModalHeader>Add Event</ModalHeader> */}
        {/* <ModalBody> */}
          <label>Title:</label>
          <input
            type="text"
            value={event?.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
          <br />
          <label>Description:</label>
          <input
            type="text"
            value={event?.desc}
            onChange={(e) => setEvent({ ...event, desc: e.target.value })}
          />
        {/* </ModalBody> */}
        {/* <ModalFooter> */}
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        {/* </ModalFooter> */}
      </Modal>
    );
  };

  export default EventModal