import PlusMinus from '../../components/PlusMinus'
import Modal from '../../components/Modal'
import { PlusMinusContext } from '../../contexts/PlusMinusContext'

export default function Home() {
    return (
        <div>
            <PlusMinusContext>
                    <PlusMinus />
                    <Modal />
            </PlusMinusContext>
        </div>
    )
}