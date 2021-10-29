
import React from 'react';
import s from './join.module.css'
import Modal from "./modal";
import useModal from './useModal';
import { MoreVert } from "@material-ui/icons"

const Join = ({ob, loadStatus}) => {
  const {isShowing, toggle} = useModal();

  return (
    <div className={s.App}>
      <MoreVert onClick={toggle}/>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        ob={ob}
        loadStatus={loadStatus}
      />
    </div>
  );
};

export default Join;