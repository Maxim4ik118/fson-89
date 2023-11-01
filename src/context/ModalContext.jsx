import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{
        dayOfTheMonth: new Date().getDate(),
        isOpenModal,
        modalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
