
import { UsuarioDTO } from '../../models/usuarioDTO';
import './styles.css';

type Props = {
  userDTO: UsuarioDTO;
}

export default function CardResult({ userDTO }: Props) {
  return (
    <div className='container-card card-result mr-top-card' >
      <div className='card-result-container'>
        <div className='img-result'>
          <img src={userDTO.imgUrl} alt={userDTO.name} />
        </div>
        <div className='data-result-container mr-top-left-card-result'>
          <h3 className='title-card-result mr-title-card-result'>Informações</h3>
          <p>Perfil:{userDTO.profile}</p>
          <p >Seguidores: {userDTO.followers}</p>
          <p >Localidade: {userDTO.locale}</p>
          <p >Nome: {userDTO.name}</p>
        </div>
      </div>
    </div>
  );
}