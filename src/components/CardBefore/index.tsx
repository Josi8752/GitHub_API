import Btn from '../Btn';
import './styles.css';


type Props = {
    text: string;
}
export default function CardBBefore({ text }: Props) {


    
    return (
        <div>
            <h2>{text}</h2>
        
        </div>
    );
}