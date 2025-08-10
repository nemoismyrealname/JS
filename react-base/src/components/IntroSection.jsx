import React from "react"

// export default function IntroSection()
// {
//     return (
//         <section className = 'centered'>
//             <h1>Вывод</h1>
//             <h3 style = {{color: '#666'}}>Jus primae noctis — почти наверняка не существовавшее на практике "право", которое стало частью антифеодальной мифологии. Оно отражает представления о власти и насилии, но не юридическую реальность.</h3>
//         </section>
//     )
// }

export default function IntroSection()
{
    return React.createElement('section', null, 
        [React.createElement('h1', {className:'centered', key: 1}, 'Вывод'), 
        React.createElement('h3', 
            {className: 'centered', style: { color:'#666' }, key: 2},
            'Jus primae noctis — почти наверняка не существовавшее на практике "право", которое стало частью антифеодальной мифологии. Оно отражает представления о власти и насилии, но не юридическую реальность.')])
}