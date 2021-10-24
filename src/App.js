import "./App.css";
import backgroundImage from "./img/background.png";
import logo from "./img/logo.png";
import partners from "./img/parceiros.png";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#F9E00F",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          padding: "80px",
        }}
      >
        <img src={logo} alt="Logo Sistema Olimpo" />
        <span
          style={{
            fontWeight: 500,
            fontSize: "20px",
            color: "#707070",
            textAlign: "left",
            width: "100%",
            marginTop: "25px",
          }}
        >
          Login
        </span>
        <input
          style={{
            display: "block",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            height: "45px",
            minHeight: "45px",
            padding: "0 16px",
            marginTop: "14px",
          }}
          type="text"
          placeholder="Login"
        />
        <input
          style={{
            display: "block",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            height: "45px",
            minHeight: "45px",
            padding: "0 16px",
            marginTop: "14px",
          }}
          type="password"
          placeholder="Senha"
        />
        <a
          style={{
            display: "block",
            color: "#2157D5",
            textDecoration: "none",
            marginTop: "7px",
            width: "100%",
            textAlign: "right",
          }}
          href="/"
        >
          Esqueci a Senha
        </a>
        <button
          style={{
            cursor: "pointer",
            display: "block",
            height: "45px",
            backgroundColor: "#3A75FF",
            color: "#FFFFFF",
            padding: "13px",
            borderRadius: "8px",
            border: "none",
            marginTop: "28px",
            width: "100%",
          }}
        >
          Entrar
        </button>
        <button
          style={{
            cursor: "pointer",
            display: "block",
            height: "45px",
            backgroundColor: "transparent",
            color: "#3A75FF",
            padding: "13px",
            border: "none",
            marginTop: "14px",
          }}
        >
          Não possui conta? Cadastre-se!
        </button>
        <img
          style={{
            marginTop: "57px",
          }}
          src={partners}
          alt="Parceiros"
        />
        <a
          style={{
            display: "block",
            color: "#2157D5",
            textDecoration: "none",
            marginTop: "49px",
          }}
          href="/"
        >
          O que é o Olimpo?
        </a>
      </div>
    </div>
  );
}

export default App;
