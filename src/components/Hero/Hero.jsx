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
        <img src="" alt="garota negra na frente do computador"/>
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
