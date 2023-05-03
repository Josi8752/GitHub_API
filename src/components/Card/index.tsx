
type Props = {
    text: string;
}
export default function Card({ text }: Props) {

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}