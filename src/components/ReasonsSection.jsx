import { reasons } from '../data'
import WhyMayItWork from "./WhyMayItWork"


export default function ReasonsSection()
{
    return (
        <section>
            <h3>Почему она может работать</h3>
            <ul>
                { reasons.map(reason => <WhyMayItWork key = {reason.title} {...reason} />) }

                {/* <WhyMayItWork title = {reasons[0].title} description = {reasons[0].description} />
                <WhyMayItWork { ...reasons[1] }/>
                <WhyMayItWork { ...reasons[2] }/>
                <WhyMayItWork { ...reasons[3] }/>
                <WhyMayItWork { ...reasons[4] }/> */}
                
            </ul>
        </section>
    )
}