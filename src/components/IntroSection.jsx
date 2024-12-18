import React from "react"

export default function IntroSection() {
    return React.createElement('section', null,
        [React.createElement('h1', { className: "centered", key: 1 }, 'Dmitry Cherkashin'),
        React.createElement('h3', { className: "centered", style:{color: '#666666'}, key: 2}, 'Будущий программист')
        ]
    )
}

// export default function IntroSection () {
//     return (
//         <section>
//             <h1 className="centered">Dmitry Cherkashin</h1>
//             <h3 className="centered" style={{color: '#666666'}}>Будущий программист</h3>
//         </section>
//     )
// }