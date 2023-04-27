import './styles.css';

type Props = {
    title: string;
}

export default function Btn({ title }: Props) {
    return (

        <div className='btn'>
            {title}
        </div>
    );
}