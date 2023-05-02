import './styles.css';

type Props = {
  title: String;
}

export default function NotFound({ title }: Props) {
  return (
    <p className='title-not-found'>{title}</p>
  );

}