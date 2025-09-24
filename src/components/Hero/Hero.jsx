import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function exibicaoModal(){
    if(isModalOpen){
      setIsModalOpen(false)
    }else{
      setIsModalOpen(true)
    }
  }
  return (
    <section>
      <div>
        <h2>Tábata Macedo</h2>
        <button onClick={exibicaoModal}>Fale Comigo</button>
      </div>
      <div>
        <a href="https://github.com/Davidf555/Cardapio-Projeto-Final-M1" target="_blank">
          <img src="/projeto_modulo2_davi.png" alt="garota negra na frente do computador"/>
        </a>
        
      </div>

      {/* modal invisivel */}
      {isModalOpen && (
        <div>
          <p>entre em contato comigo</p>
        </div>
      )}
    </section>

  );
}
