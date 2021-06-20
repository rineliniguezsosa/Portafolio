import Description from './Componentes/Description'
import ContForm from './Componentes/ContForm'
import Pie from './Componentes/Pie'
import Webservices from './Componentes/Webservices'
import Main from './Componentes/Main'
import Boxabout from './Componentes/Boxabout'
import { Box } from '@material-ui/core';

function App() {
  return (
    <Box>
      <Main></Main>
      <Boxabout></Boxabout>
      <Webservices>
      </Webservices>
      <Description>
      </Description>
      <ContForm>
      </ContForm>
      <Pie>
      </Pie>
    </Box>
  );
}

export default App;
