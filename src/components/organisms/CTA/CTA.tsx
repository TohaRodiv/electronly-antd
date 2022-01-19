import { Container } from "#atoms/container";
import { Image } from "#atoms/image";
import { CallbackForm } from "#organisms/callback-form";
import { FC } from "react";
import styles from "./style.module.scss";
import CTAImage from "./../../../../public/images/workspace.svg";
import classNames from "classnames";
import Title from "antd/lib/typography/Title";

type TProps = {
	head: string
}

const CTA: FC<TProps> = ({
	head,
}) => {
	return (
		<div className={styles["cta"]}>
			<Container>
				<div className={styles["cta__row"]}>
					<div className={classNames(styles["cta__col"], styles["cta__col-image"])}>
						<Image
							alt=""
							width={500}
							height={500}
							src={CTAImage} />
					</div>
					<div className={classNames(styles["cta__col"], styles["cta__col-form"])}>
						<Title level={4} className={styles["cta__head"]}>
							{head}
						</Title>
						<CallbackForm />
					</div>
				</div>
			</Container>
		</div>
	);
};

export {
	CTA
};