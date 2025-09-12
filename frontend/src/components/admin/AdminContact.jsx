import React, { useState, useEffect } from 'react'
import "./styles/AdminContact.scss"
import { api } from '../../lib/api'
import Swal from 'sweetalert2'
const AdminContact = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await api.get('/api/contact')
                setContacts(res.data)

            } catch (error) {
                console.log('문의글 가져오기 실패', error)
            }
        }

        fetchData()

    }, [])

    return (
        <div className='inner admin-contact'>
            <h2>문의글 관리</h2>
            <div className="contact-wrapper">
                <ul className="contact-list">
                    {contacts.map((c, i) => (

                        <li key={c._id}>
                            <h3>
                                <span className='key'>
                                    이름
                                </span>
                                :
                                <span className='value'>
                                    {c.name}
                                </span>
                            </h3>
                            <p>
                                <span className='key'>
                                    email
                                </span>
                                :
                                <span className='value'>
                                    {c.email}
                                </span>
                            </p>
                            <p>
                                <span className='key'>
                                    전화번호
                                </span>
                                :
                                <span className='value'>
                                    {c.phone}
                                </span>
                            </p>
                            <p>
                                <span className='key'>
                                    메세지
                                </span>
                            </p>
                            <p className='message'>
                                {c.message}
                            </p>
                            <p>
                                <span className='key'>
                                    상태
                                </span>
                                <span className={`status s-${(c.status || "").replace(" ","-")}`}>
                                    {c.status}
                                </span>
                            </p>
                            <div className="btns">
                                <button>상태변경</button>
                                <button>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default AdminContact