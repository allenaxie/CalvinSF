import classes from './PropertiesGallery.module.scss';
import AliceCarousel, { Classnames } from 'react-alice-carousel';
import Image from 'next/image';
import { urlFor } from '../../sanity';

interface PropertiesGalleryProps {
    properties: any,
}

const PropertiesGallery = ({ properties }: PropertiesGalleryProps) => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = properties.map((item: any, index: number) => {
        return (
            <div className={classes.propertyItem}
                key={item.address}
            >
                <Image src={`${urlFor(item.imgUrl)}`} height={250} width={410} alt={item.address} />
                <span>{item.address}</span>
            </div>
        )
    })

    return (
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        )
}

export default PropertiesGallery;