import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9999/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", response.data); // Token'ı kaydet
            navigate("/"); // Başarılı giriş sonrası yönlendirme
        } catch (error) {
            console.error("Giriş başarısız:", error);
            alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
        }
    };
    return (
        <Container>
            <h1>Login</h1>
            <form>
                <Row>
                    <Col><label>Kullanıcı Adı:</label></Col>
                    <Col><input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /></Col>
                </Row>
                <Row className="mt-2">
                    <Col><label>Şifre:</label></Col>
                    <Col> <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></Col>
                </Row>
                <Row className="mt-2">
                    <Col></Col>
                    <Col> <Button variant="success"
                        onClick={handleLogin}>

                        Giriş Yap</Button></Col>
                </Row>



            </form>
        </Container>
    );
};

export default Login;