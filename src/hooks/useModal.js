import React,{useState} from 'react';
import {Modal, ModalContent, CloseButton} from '../components/modal';

const useModal = (open) => {
	const[show, setShow] = useState(open);

  const myModal = (props) =>{
    if(show){
      return (
          <Modal>
            <ModalContent>
              {props.children}
            </ModalContent>
            <CloseButton
              onClick={ () => setShow(false)}
              >X</CloseButton>
          </Modal>
        )
    }else{
      return null;
    }
    
  }

  return [myModal,setShow];  
  
}

export default useModal;