import SvgIcon from '@mui/material/SvgIcon';
import { colors } from '../../styles';

export default function BackIcon(props) {
    return (
        <SvgIcon width="1em" height="1em" style={{ fontSize: props.fontSize }}>
            <path
                d="M14.0179 3.8491C14.4084 3.45857 14.4084 2.82541 14.0179 2.43489L13.9571 2.3741C13.5666 1.98357 12.9334 1.98357 12.5429 2.3741L5.70711 9.20989C5.31658 9.60041 5.31658 10.2336 5.70711 10.6241L12.5429 17.4599C12.9334 17.8504 13.5666 17.8504 13.9571 17.4599L14.0179 17.3991C14.4084 17.0086 14.4084 16.3754 14.0179 15.9849L8.65711 10.6241C8.26658 10.2336 8.26658 9.60041 8.65711 9.20989L14.0179 3.8491Z"
                fill={colors.green5}
            />
        </SvgIcon>
    );
}
