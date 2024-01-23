import React, { useState } from "react";
import "./header.css";
import Modal from "react-modal";
import Nav from "./nav/nav";

Modal.setAppElement("#root"); // указываем корневой элемент вашего приложения

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  let fm = "http://online.kissfm.ua/KissFM";
  let melody = "http://online.melodiafm.ua/MelodiaFM";
  return (
    <header className="header">
      <div className="wrapper arey">
        <button onClick={openModal} className="menu">
          Меню
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Пример модального окна"
        >
          <div className="navigationCont">
            <Nav click={closeModal} />
            <div className="btn">
              <button onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        </Modal>
        <div className="radioCont">
          <legend> Радио Kiss FM</legend>

          <audio controls className="audio">
            <source src={fm} type="audio/mpeg" />
            Ваш браузер не поддерживает тег audio.
          </audio>

          <legend>Радио мелодия</legend>
          <audio controls className="audio">
            <source src={melody} type="audio/mpeg" />
            Ваш браузер не поддерживает тег audio.
          </audio>
        </div>
      </div>
    </header>
  );
}

export default Header;
