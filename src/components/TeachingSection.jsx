import WayToTeach from "../components/WayToTeach.jsx"
import { ways } from '../data.js'

export default function TeachingSection() {
    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {ways.map(way =>
                    <WayToTeach key={way.title} {...way} />
                )}
            </ul>
        </section>
    )
}