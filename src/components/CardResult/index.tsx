
import { UsuarioDTO } from '../../models/usuarioDTO';
import './styles.css';

type Props = {
  userDTO: UsuarioDTO;
}

export default function CardResult({ userDTO }: Props) {
  return (

    <>
      <div className='container card-result'>
        <div className='user-img'>
          <img src={userDTO.avatar_url} alt={userDTO.name} />
        </div>

        <div className='table'>
          <div className=' table-data'>
            <h4 className='informations'>Informações</h4>
            <div>
              <div className='link'>
                <span className='description-informations'>Perfil: </span> <a href={userDTO.html_url}>{userDTO.html_url}</a>
              </div>

              <div>
                <p className='value'> <span className='description-informations'>Seguidores: </span> {userDTO.followers}</p>
              </div>

              <div >
                <p className='value'><span className='description-informations'>Localidade: </span> {userDTO.location}</p>
              </div>

              <div >
                <p className='value'> <span className='description-informations'>Nome: </span>{userDTO.name}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>


  );
}