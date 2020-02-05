import React from 'react'
import ReactDom from 'react-dom'
import '../css/modal.css'

const Modal = props => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="dimmer">
            <div onClick={(e) => e.stopPropagation()} className="portactive">
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
