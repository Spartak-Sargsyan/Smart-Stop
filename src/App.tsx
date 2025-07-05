/** @format */

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
// import Church from './components/Place/Church/Church';

function App() {
    // return <Church />;
    return <RouterProvider router={router} />;
}

export default App;
