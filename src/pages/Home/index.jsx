import PlusMinus from '../../components/PlusMinus'
import Modal from '../../components/Modal'
import { PlusMinusContext } from '../../contexts/PlusMinusContext'
import Figures from '../../components/Figures'

export default function Home() {
return (
    <div>
        <PlusMinusContext>
            <PlusMinus />
            <Modal />
        </PlusMinusContext>
        <Figures />
    </div>
    )
}