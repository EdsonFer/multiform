import { ReactNode } from 'react';
import { useForm } from '../../contexts/FormContext';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { Area, Container, Page, Sidebar, Steps } from './styles';

interface ThemeProps {
	children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
	const { state } = useForm();

	return (
		<Container>
			<Area>
				<Header />
				<Steps>
					<Sidebar>
						<SidebarItem
							title="Pessoal"
							description="Se identifique"
							icon="profile"
							path="/"
							active={state.currentStep === 1}
						/>
						<SidebarItem
							title="Profissional"
							description="Seu nivel"
							icon="book"
							path="/step2"
							active={state.currentStep === 2}
						/>
						<SidebarItem
							title="Contatos"
							description="Como te achar"
							icon="mail"
							path="/step3"
							active={state.currentStep === 3}
						/>
					</Sidebar>
					<Page>{children}</Page>
				</Steps>
			</Area>
		</Container>
	);
}
