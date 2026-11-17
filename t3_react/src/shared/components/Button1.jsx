import Button from '@mui/material/Button';

export default function ButtonUsage({ text, onClick, className }) {
    return <Button className={className} onClick={onClick}>
        {text}
    </Button>;
}