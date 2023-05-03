
import { UsuarioDTO } from '../../models/usuarioDTO';
import './styles.css';

type Props = {
  userDTO: UsuarioDTO;
}

export default function CardResult({ userDTO }: Props) {
  return (
    <>

    <div className='container card-result'>
   <div>
    <div>
      <img src={userDTO.avatar_url} alt={userDTO.name} />
    </div>
   </div>
      <div>
        <h3 >Informações</h3>
        <p>Perfil:<a href={userDTO.html_url}>{userDTO.html_url}</a></p>
        <p >Seguidores: {userDTO.followers}</p>
        <p >Localidade: {userDTO.location}</p>
        <p >Nome: {userDTO.name}</p>
      </div>
    </div>
     
  </>
      
   
  );
}