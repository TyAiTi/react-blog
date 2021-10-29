import React from 'react';
import ReactDOM from 'react-dom';
import s from './join.module.css'
import { useState } from 'react';
import RemoveStatus from '../../API/RemoveStatus'
import UpdateStatus from '../../API/UpdateStatus'
export default function Modal({ isShowing, hide, ob, loadStatus }){
    const [update, setUpdate] = useState({content: ob.content, benefit: ob.benefit})
    const inputUpdate =(e) =>{
      const inputName = e.currentTarget.name
      const value = e.currentTarget.value
      setUpdate(prev => ({ ...prev, [inputName]: value }));
    }
    const editStatus = async (e,{hide,ob})=>{
        e.preventDefault();
        let obEdit = {
            id_st: ob.id_st,
            content: update.content,
            benefit: update.benefit,
            }
        const json = await UpdateStatus(obEdit)
        console.log(json)
        if(json.status){
            alert("Update susscess !")
        }
        //reload status
        loadStatus()
        hide()
    }
    const removeStatus = async (e,{hide,ob})=>{
      e.preventDefault();
      let ob_st = {
        id_st: ob.id_st
      }
      const json = await RemoveStatus(ob_st)
      console.log(json)
      if(json.status){
        alert("Remove susscess !")
      }
      //reload status
      loadStatus()
      hide()
  }
    return(
    isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className={s.modal_overlay}/>
            <div className={s.modal_wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={s.modal}>
                <div className={s.top}> 
                    <input className={s.shareInput} type="text" name="content" 
                            value={update.content} onChange={inputUpdate }/>
                    <input className={s.shareMoney} name="benefit" type="number" 
                            value = {update.benefit} onChange={inputUpdate} /> 
                </div>
                <div className={s.down}> 
                    <div className={s.left}> 
                        <button className={s.button_default} onClick={(e)=>{editStatus(e,{hide,ob})}}>Edit</button> 
                    </div>
                    <div className={s.center}> 
                        <button className={s.button_default} onClick={(e)=>{removeStatus(e,{hide,ob})}}>Remove</button> 
                    </div>
                    <div className={s.right}> 
                        <button className={s.button_default} onClick={hide}>Close</button> 
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>, document.body
        ) : null
    )
}