import React from 'react'

function Resume() {
    return (
        <div className='btnwrapper'>
            <h4>Resume</h4>
            <span>
                <a href={require('./atriaccaresume20190420.docx')} download>
                <button className='btn'>Download .doc file</button></a>
            </span>
            <span>
                <a href={require('./atriaccaresume20190420.jpg')} download>
                <button className='btn'>Download .jpg file</button></a>
            </span>
            <span>
                <a href={require('./atriaccaresume20190420.odt')} download>
                <button className='btn'>Download OpenDoc file</button></a>
            </span>
            {/* <span>
                <a href={require('./atriaccaresume20190420.pdf')} download>
                <button className='btn'>Download .pdf file</button></a>
            </span> */}
            {/* <span>
                <a href={require('./atriaccaresume20190420.rtf')} download>
                <button className='btn'>Download Rich Text file</button></a>
            </span> */}
        </div>
    )
}

export default Resume