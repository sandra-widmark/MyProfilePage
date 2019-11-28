
import React from "react";
import { Div, Button, Modal, Icon, Text, Input, Textarea } from "atomize";

const TitleInput = () => {
    return (
      <Input placeholder="Namn på övning" />
    );
  }

  const DescriptionInput = () => {
    return (
      <Textarea placeholder="Beskrivning" />
    );
  }

  const WeightInput = () => {
    return (
      <Input placeholder="Vikt" />
    );
  }

const AddNewExcerciseModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
          Namn på övning
        </Text>
      <TitleInput/>
      <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
          Beskrivning
        </Text>
      <DescriptionInput/>
      <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
          Vikt
        </Text>
      <WeightInput/>
      <Div d="flex" m={{ b: "4rem" }}>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Stäng
        </Button>
        <Button onClick={onClose} bg="info700">
          Spara
        </Button>
      </Div>
    </Modal>
  );
};

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
            h="2.5rem"
            w="2.5rem"
            bg="danger700"
            hoverBg="danger600"
            rounded="lg"
            m={ "1rem"}
            onClick={() => this.setState({ showModal: true })}
            >
            <Icon name="Plus" size="20px" color="white" />
        </Button>
        <AddNewExcerciseModal
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default UpdateModal;