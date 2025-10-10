export default function Tag({text, key}) {
    return (
        <span key={key} className='tag'>{text}</span>
    );
}