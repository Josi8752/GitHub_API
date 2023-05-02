import { GitHubDTO } from '../../moldes/github';
import './styles.css';

type Props = {
  userDTO: GitHubDTO;
}

export default function CardResult({ userDTO }: Props) {
  return (
    <div className='container-card card-result mr-top-card' >
      <div className='card-result-container'>
        <div className='img-result'>
          <img src={userDTO.avatar_url} alt={userDTO.name} />
        </div>
        <div className='data-result-container mr-top-left-card-result'>
          <h3 className='title-card-result mr-title-card-result'>Informações</h3>
          <p><span className='sub-title-card-result'>Perfil:</span> <a href={userDTO.html_url} target="_blank" rel="noopener noreferrer">{userDTO.html_url}</a></p>
          <p className='mr-top-card-result'> <span className='sub-title-card-result'>Seguidores:</span> {userDTO.followers}</p>
          <p className='mr-top-card-result'><span className='sub-title-card-result'>Localidade: </span>{userDTO.location}</p>
          <p className='mr-top-card-result'><span className='sub-title-card-result'>Nome:</span> {userDTO.name}</p>
        </div>
      </div>
    </div>
  );
}