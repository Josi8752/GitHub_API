import Btn from '../Btn';
import './styles.css';


type Props = {
    text: string;
}
export default function Card({ text }: Props) {
    return (
        <div className='card'>
            <h2>{text}</h2>
            <div className="input mt30 ">
                <input type="text"
                    name="usuarioGithub"
                    placeholder="Usuário Github"
                />
            </div>

            <div className="mt30 dflex">

                < Btn title="encontar" />
            </div>
        </div>
    );
}