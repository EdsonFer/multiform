import { FormProvider } from './contexts/FormContext';
import { Router } from './router';
import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<FormProvider>
			<Router />
			<GlobalStyle />
		</FormProvider>
	);
}
