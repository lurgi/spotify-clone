"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Modal
        title="Text Modal"
        description="Test Des"
        isOpen
        onChange={() => {}}>
        Test Child
      </Modal>
    </>
  );
};

export default ModalProvider;
