import SvgIcon from '@mui/material/SvgIcon';

export default function LocationIcon(props) {
    const { color, ...otherProps } = props;

    return (
        <SvgIcon {...otherProps} viewBox="0 0 16 20">
            <path
                d="M7.83008 9.5C7.16704 9.5 6.53115 9.23661 6.06231 8.76777C5.59347 8.29893 5.33008 7.66304 5.33008 7C5.33008 6.33696 5.59347 5.70107 6.06231 5.23223C6.53115 4.76339 7.16704 4.5 7.83008 4.5C8.49312 4.5 9.129 4.76339 9.59785 5.23223C10.0667 5.70107 10.3301 6.33696 10.3301 7C10.3301 7.3283 10.2654 7.65339 10.1398 7.95671C10.0141 8.26002 9.82999 8.53562 9.59785 8.76777C9.3657 8.99991 9.0901 9.18406 8.78679 9.3097C8.48347 9.43534 8.15838 9.5 7.83008 9.5ZM7.83008 0C5.97356 0 4.19309 0.737498 2.88033 2.05025C1.56758 3.36301 0.830078 5.14348 0.830078 7C0.830078 12.25 7.83008 20 7.83008 20C7.83008 20 14.8301 12.25 14.8301 7C14.8301 5.14348 14.0926 3.36301 12.7798 2.05025C11.4671 0.737498 9.68659 0 7.83008 0Z"
                fill={color}
            />
        </SvgIcon>
    );
}
