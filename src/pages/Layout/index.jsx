import { Outlet, useParams } from 'react-router-dom';
import Header from '../../components/Header/index.jsx';

export default function Layout() {

    const { panel } = useParams();
    const title = panel ? panel : 'Inicio';

    return (
        <div>
            <Header title={title} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}