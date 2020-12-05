import { useState } from 'react';

const useSideDrawer = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return { drawerIsOpen, openDrawerHandler, closeDrawerHandler };
};

export default useSideDrawer
