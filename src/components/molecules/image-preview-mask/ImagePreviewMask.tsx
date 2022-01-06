import { EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { FC, ReactNode } from "react";

type TProps = {
	icon?: ReactNode
	text?: ReactNode
}

const ImagePreviewMask: FC<TProps> = ({
	icon,
	text,
}) => {
	return (
		<Space>
			{icon}
			{
				text && <span>{text}</span>
			}
		</Space>
	);
};

ImagePreviewMask.defaultProps = {
	icon: <EyeOutlined />,
	text: "Просмотр",
};

export {
	ImagePreviewMask
};