
import { useEffect, useState } from "react";
import Btn from "../../../components/Btn";
import Card from "../../../components/CardBefore";
import './styles.css';
import { UsuarioDTO } from "../../../models/usuarioDTO";
import * as usuarioService from '../../../services/usuario-services';
import { useNavigate } from "react-router-dom";
import CardResult from "../../../components/CardResult";



type FormData = {
  user: string;
}

export default function ResultGithub() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UsuarioDTO>();
  const [formData, setFormData] = useState<FormData>(
    {
      user: ''
    }
  );



  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    usuarioService.userGithub(formData.user)

      .then(response => {
        setUserData(response.data);
      })
  }

  return (
    <>
      <main>
        <section>
          <div className="container mt30 mb30">
            <div className='card'>
              <Card text="Encontre um perfil Github" />
              <div className="input mt30 ">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="user"
                    value={formData.user}
                    placeholder="Usuário Github"
                    onChange={handleInputChange}
                  />
                </form>
                <div className="mt30 dflex">

                  <Btn title="Encontrar" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>


  );
}