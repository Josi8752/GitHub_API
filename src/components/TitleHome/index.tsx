import './styles.css';
type Props = {
    title: string;
    subTitle: string;
}

export default function TitleHomeBody({ title, subTitle }: Props) {

    return (
        <div className="titleHomeBody">
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
        </div>
    );
}