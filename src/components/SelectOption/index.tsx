import { Container, Description, Icon, Info, Title } from './styles';

interface SelectOptionProps {
	title: string;
	description: string;
	icon: string;
	selected: boolean;
	onClick: () => void;
}

export function SelectOption({
	title,
	description,
	icon,
	selected,
	onClick,
}: SelectOptionProps) {
	return (
		<Container onClick={onClick} selected={selected}>
			<Icon>{icon}</Icon>
			<Info>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Info>
		</Container>
	);
}
