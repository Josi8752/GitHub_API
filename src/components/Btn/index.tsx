import './styles.css';

type Props = {
    title: string;
}

export default function Btn({ title }: Props) {
    return (

        <button className='btn' type='submit' >
            {title}
        </button>
    );
}