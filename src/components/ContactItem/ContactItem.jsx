import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { deleteContact } from '../../redux/operations';
import Stack from '@mui/material/Stack';
import * as React from 'react';

const RandomImageComponent = () => {
  const images = [
    'https://bit.ly/tioluwani-kolawole',
    'https://bit.ly/dan-abramov',
    'https://bit.ly/kent-c-dodds',
    'https://bit.ly/prosper-baba',
  ];
  const [randomImage, setRandomImage] = React.useState('');

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    setRandomImage(selectedImage);
  };

  React.useEffect(() => {
    getRandomImage();
  }, []);

  return randomImage;
};

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const randomImage = RandomImageComponent();

  return (
    <div className="contact-item" key={id}>
      <Stack direction="row" spacing={2}>
        {randomImage && (
          <img src={randomImage} alt="avatar" className="avatar" />
        )}
      </Stack>
      <span className="item">{name} </span>
      <span className="item">{number} </span>
      <button
        className="deletebtn"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
