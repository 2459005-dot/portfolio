import React from 'react'
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import './styles/AdminHeader.scss'

const AdminHeader = () => {
    const nav = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await api.post("/api/auth/logout", {}, { withCredentials: true });

            nav("/admin/login", { replace: true });
        } catch (err) {
            console.error("로그아웃 실패:", err);
        }
    };
    return (
        <div className='inner admin-header'>
            <form onSubmit={handleLogout}>
                <button type="submit">로그아웃</button>
            </form>
        </div>
    )
}

export default AdminHeader