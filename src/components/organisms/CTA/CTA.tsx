import { Container } from "#atoms/container";
import { Image } from "#atoms/image";
import { CallbackForm } from "#organisms/callback-form";
import { FC } from "react";
import styles from "./style.module.scss";
import CTAImage from "./../../../../public/images/workspace.svg";
import classNames from "classnames";
import Title from "antd/lib/typography/Title";

type TProps = {}

const CTA: FC<TProps> = () => {
	return (
		<div className={styles["cta"]}>
			<Container>
				<div className={styles["cta__row"]}>
					<div className={classNames(styles["cta__col"], styles["cta__col-image"])}>
						<Image
							width={500}
							height={500}
							src={CTAImage} />
					</div>
					<div className={classNames(styles["cta__col"], styles["cta__col-form"])}>
						<Title level={4} className={styles["cta__head"]}>
							Не можете найти подходящий товар? Задайте вопрос специалисту!
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