import type {FC} from 'react';
import { QueryClient, QueryClientProvider} from 'react-query';

import Main from '../../pages/Main';

const App: FC = () => {
  const queryClient = new QueryClient()
  
  return (
      <QueryClientProvider client={queryClient}>
          <Main/>
      </QueryClientProvider>
  );
}

export default App;
