import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import './../styles/mapview.css'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Select } from '../components/Select';
import img0 from './../assets/good1.jpeg'
import img1 from './../assets/good.jpg'
import img2 from './../assets/median.jpg'
import img3 from './../assets/bad.jpeg'
import img4 from './../assets/bad2.jpeg'

const MapView = () => {
    const bogota = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39472301613!2d-74.27262210527678!3d4.648620637636398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744150626752!5m2!1ses!2sco';
    const localidades = [
        { text: 'Usaquén', value: 'Usaquén', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127236.62784382673!2d-74.11119997802399!3d4.744912498805596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8f805d4e5beb%3A0x853611c42477c6f!2zVXNhcXXDqW4sIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1744149800542!5m2!1ses!2sco' },
        { text: 'Chapinero', value: 'Chapinero', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63627.08407338412!2d-74.07139798125718!3d4.648782404333646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f909e88bf0583%3A0xcee402e0b005bc73!2sChapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744149840686!5m2!1ses!2sco' },
        { text: 'Santa Fe', value: 'Santa Fe', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63632.08549013517!2d-74.08185803129675!3d4.5930628752769085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a24f5244f69%3A0xc863309eb6922ea1!2zU2FudGEgRsOpLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1744149916860!5m2!1ses!2sco' },
        { text: 'San Cristóbal', value: 'San Cristóbal', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63635.99589407136!2d-74.10772793132709!3d4.54902369177581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f988caf2631c9%3A0x39057bb472804cc8!2zU2FuIENyaXN0w7NiYWwsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1744149955243!5m2!1ses!2sco' },
        { text: 'Usme', value: 'Usme', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63640.03980180145!2d-74.13657483135802!3d4.503028958956321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa3f96481dab7%3A0xa43270a0bc7ba2e0!2zVXNtZSwgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744149988548!5m2!1ses!2sco' },
        { text: 'Tunjuelito', value: 'Tunjuelito', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63634.695600018356!2d-74.17958408131705!3d4.563714736277252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f56e7f0212b%3A0xabe1e0880322be94!2sTunjuelito%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150054942!5m2!1ses!2sco' },
        { text: 'Bosa', value: 'Bosa', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63629.160940190624!2d-74.22877153127371!3d4.625725863009159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e6fec7428e9%3A0x46c5252ef4b8d101!2zQm9zYSwgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744150077171!5m2!1ses!2sco' },
        { text: 'Kennedy', value: 'Kennedy', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63628.77512333361!2d-74.19318183127064!3d4.630017711395246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c20c1186379%3A0x72c48cbe21e275ac!2sKennedy%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150106370!5m2!1ses!2sco' },
        { text: 'Fontibón', value: 'Fontibón', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.47896915842!2d-74.18088298123638!3d4.67754289349356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c5fa5d2a31d%3A0xa5f9c78731920c46!2zRm9udGliw7NuLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1743989479647!5m2!1ses!2sco' },
        { text: 'Engativá', value: 'Engativá', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63622.68572193667!2d-74.15986093122194!3d4.697238336058446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ca931bb3685%3A0x777bc49f16df0ff4!2zRW5nYXRpdsOhLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1744150135951!5m2!1ses!2sco' },
        { text: 'Suba', value: 'Suba', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127233.5459909931!2d-74.1654812779712!3d4.761602677637627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84509d700417%3A0xc7cd69e940f94f14!2zU3ViYSwgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744150162619!5m2!1ses!2sco' },
        { text: 'Barrios Unidos', value: 'Barrios Unidos', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31812.590904070716!2d-74.09598562748324!3d4.66980092305184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9afe484261e9%3A0xf6b262f63cd9e822!2sBarrios%20Unidos%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150186312!5m2!1ses!2sco' },
        { text: 'Teusaquillo', value: 'Teusaquillo', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31813.900198644962!2d-74.10809167748836!3d4.640842976659198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9beaa5647337%3A0x6fa358372e109359!2sTeusaquillo%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150211596!5m2!1ses!2sco' },
        { text: 'Los Mártires', value: 'Los Mártires', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31815.35465152028!2d-74.12893274040995!3d4.608461667591534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f996fc1731b19%3A0x67d539e568f514ca!2zTG9zIE3DoXJ0aXJlcywgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1744150248414!5m2!1ses!2sco' },
        { text: 'Antonio Nariño', value: 'Antonio Nariño', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63632.598993211264!2d-74.18618625941527!3d4.587303838609898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ec938288ccd%3A0xd26fbabad84b817!2zQW50b25pbyBOYXJpw7FvLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1744150275491!5m2!1ses!2sco' },
        { text: 'Puente Aranda', value: 'Puente Aranda', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31814.859363399228!2d-74.13105362749208!3d4.619513979309415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f995af262b5b5%3A0x9fbf40b4e087e0e0!2sPuente%20Aranda%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150331900!5m2!1ses!2sco' },
        { text: 'La Candelaria', value: 'La Candelaria', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.946457055355!2d-74.08133381062704!3d4.5964203148747975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a844cf79cb%3A0xa58d1864daa71331!2sLa%20Candelaria%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150355102!5m2!1ses!2sco' },
        { text: 'Rafael Uribe Uribe', value: 'Rafael Uribe Uribe', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31817.241871273956!2d-74.13327082750119!3d4.566103885920562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98b78f49de33%3A0xd61bc7317575ff64!2sRafael%20Uribe%20Uribe%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1744150378265!5m2!1ses!2sco' },
        { text: 'Ciudad Bolívar', value: 'Ciudad Bolívar', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127274.52809811183!2d-74.23634797865158!3d4.534650014375777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa1eeb33e606f%3A0xac63ff9e839d40a!2zQ2RhZC4gQm9sw612YXIsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1744150533458!5m2!1ses!2sco' },
    ];

    const recomendations = [
        {
            title: "Calidad del Aire Buena (0–50 AQI): ¡Disfruta al Aire Libre!",
            description: "Es seguro realizar actividades al aire libre como caminar, correr, andar en bicicleta o hacer picnic. Puedes ventilar tu casa abriendo ventanas y aprovechar el día para pasar tiempo en la naturaleza.",
            img: img0,
        },
        {
            title: "Calidad del Aire Moderada (51–100 AQI): Precaución para Sensibles",
            description: "La mayoría puede disfrutar de actividades normales, pero personas con enfermedades respiratorias, niños y ancianos deben evitar esfuerzos físicos intensos al aire libre. Ventila tu hogar en las horas de menor contaminación (mañana temprano o noche).",
            img: img1,
        },
        {
            title: "Calidad del Aire Dañina para Grupos Sensibles (101–150 AQI): Limita la Exposición",
            description: "Evita actividades físicas exigentes en exteriores si perteneces a un grupo sensible. Usa mascarilla si necesitas salir y considera usar purificadores de aire dentro de casa.",
            img: img2,
        },
        {
            title: "Calidad del Aire Dañina (151–200 AQI): Quédate en Interiores",
            description: "Toda la población puede comenzar a sentir efectos en la salud. Reduce al mínimo las actividades al aire libre, mantén puertas y ventanas cerradas y utiliza filtros de aire o purificadores si es posible.",
            img: img3,
        },
        {
            title: "Calidad del Aire Muy Dañina o Peligrosa (201+ AQI): Máxima Precaución",
            description: "Evita salir de casa. Suspende toda actividad física, mantén tu hogar bien sellado y usa mascarillas N95 si es absolutamente necesario salir. Considera crear una 'habitación limpia' con un purificador de aire.",
            img: img4,
        }
    ]

    function getRandomIndex() {
        const n = Math.floor(Math.random() * 5);
        if (recomendationIndex === n) {
            getRandomIndex();
        } else {
            setRecomendationIndex(n);
        }
    }

    function getMapUrl() {
        const foundLocalidad = localidades.find((l) => {
            return l.text === localidad
        })
        return foundLocalidad && foundLocalidad.url ? foundLocalidad.url : bogota;
    }

    const [localidad, setLocalidad] = useState();
    const [recomendationIndex, setRecomendationIndex] = useState();

    return (<div className='map-view'>
        <Nav />
        <div>
            <form className="map-view__form">
                <Select label={'Localidad'} options={localidades} id={'localidad'} change={setLocalidad} />
                <Input label={'Fecha'} type={'date'} />
                <Input label={'Hora'} type={'time'} />
                <div className='map-view__button'>
                    <Button text={'BUSCAR'} action={getRandomIndex} />
                </div>

            </form>
        </div>
        <div>
            <div style={{ position: 'relative' }}>
                <div className="map-overlay">
                    <div>
                        <h3>{!isNaN(recomendationIndex) ? recomendations[recomendationIndex].title : 'Selecciona una localidad, fecha y hora para ver los datos'}</h3>
                        <p>{!isNaN(recomendationIndex) ? recomendations[recomendationIndex].description : ''}</p>
                    </div>
                    {!isNaN(recomendationIndex) ? <img style={{ width: '100%' }} src={recomendations[recomendationIndex].img} alt='img' /> : ''}
                </div>
                <iframe
                    title="Mapa de Bogotá con Google Maps"
                    src={getMapUrl()}
                    width="100%"
                    height="600px"
                    style={{ border: 0, pointerEvents: 'none' }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>)

}

export { MapView }