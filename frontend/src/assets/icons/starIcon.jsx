import SvgIcon from "@mui/material/SvgIcon";
import { colors } from "../../styles";

export default function StarIcon(props) {
  const { color, ...otherProps } = props;

  return (
    <SvgIcon {...otherProps}>
      <path
        d="M12.2584 16.8419L12 16.686L11.7416 16.8419L6.57613 19.9596L7.94693 14.0836L8.01549 13.7897L7.78739 13.5921L3.22308 9.63803L9.23227 9.12821L9.5327 9.10272L9.65036 8.82511L12 3.2813L14.3496 8.82511L14.4673 9.10272L14.7677 9.12821L20.7769 9.63803L16.2126 13.5921L15.9845 13.7897L16.0531 14.0836L17.4239 19.9596L12.2584 16.8419Z"
        fill={color}
        stroke={colors.green6}
      />
    </SvgIcon>
  );
}
