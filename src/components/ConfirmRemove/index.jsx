import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useStateValue } from '../../ClockProvider';
import { toast, ToastContainer } from "react-toastify";

const ConfirmRemove = (props) => {
  const { show, toggle} = props;
  const [modal, setModal] = useState(show);
  const [ {cities}, dispatch ] = useStateValue();

  useEffect(() => {
    setModal(show);
  }, [show]);

  const handleSubmit = () => {
    const data = {
        type: 'REMOVE_CITY',
    };
    dispatch(data);
    toggle();
    toast.success('Xóa thành công.');
  }

  const handleClick = () => {
    if(!toggle) return;
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={handleClick}>
        <ModalHeader toggle={handleClick}>Xác nhận</ModalHeader>
        <ModalBody>
          Bạn muốn xóa đồng hồ?
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={handleSubmit}>Xác nhận</Button>{' '}
          <Button color="danger" onClick={handleClick}>Đóng</Button>
        </ModalFooter>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default ConfirmRemove;