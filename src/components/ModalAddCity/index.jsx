import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useStateValue } from '../../ClockProvider';
import { timezones } from '../../constants/timezone';

const ModalAddCity = (props) => {
  const { show, toggle} = props;
  const [modal, setModal] = useState(show);
  const [timezone, setTimezone] = useState({});
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [selectError, setSelectError] = useState('');
  const [ {cities}, dispatch ] = useStateValue();

  const setupSelectData = () => {
    let data = [];
    for (let i = 0; i < timezones.length; i++) {
        let tz = timezones[i];
        if (cities.some(city => city.timezone === tz)) {
            continue;
        }
        data = [...data, {value:tz, label:tz}];
    }
    return data;
  }

  const options = setupSelectData();


  useEffect(() => {
    setModal(show);
  }, [show]);

  const handleChange = (data) => {
    if (data.target) {
        setName(data.target.value);
        return;
    }
    setTimezone(data);
  }

  const validateForm = () => {
    let isError =  true;
    if (name.length === 0) {
      setNameError('Vui lòng nhập tên.');
      isError = false;
    } else {
      setNameError('');
    }
    if (!timezone.value) {
      setSelectError('Vui lòng chọn múi giờ.');
      isError = false;
    } else {
      setSelectError('');
    }

    return isError;
  }

  const handleSubmit = () => {
    const isError = validateForm();
    if (isError) {
        const data = {
            type: 'ADD_CITY',
            data: {
                name: name,
                timezone: timezone.value,
            }
        };
        dispatch(data);
        setTimezone('');
        setName('');
        toggle();
    }
  }

  const handleClick = () => {
    if(!toggle) return;
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={handleClick} className="">
        <ModalHeader toggle={handleClick}>Thêm đồng hồ</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup>
              <Label for="name">Tên đồng hồ</Label>
              <Input type="text" name="name" id="name" value={name} onChange={handleChange}/>
                { nameError && <p className="text-danger">{nameError}</p> }
          </FormGroup>
          <FormGroup>
            <Label for="timezone">Múi giờ</Label>
              <Select
                value={timezone}
                onChange={handleChange}
                id="timezone"
                options={options}
              />
              { selectError && <p className="text-danger">{selectError}</p> }
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={handleSubmit}>Lưu</Button>{' '}
          <Button color="danger" onClick={handleClick}>Đóng</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalAddCity;