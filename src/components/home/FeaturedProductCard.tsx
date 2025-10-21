import { useState } from 'react';
import { useNavigate } from 'react-router';

import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';


import { ZitecButton } from '../common/ZitecButton';

export const FeaturedProductCard = (
    { src, title, text, buttonText, buttonLink }:
        { src: string, title: string, text: string, buttonText: string, buttonLink: string }
) => {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Card
            className="bg-dark text-white"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{ borderRadius: 0, borderWidth: 0 }}
        >
            <Card.Img src={src} alt={title} style={{ borderRadius: 0 }} />
            <Card.ImgOverlay
                style={{ borderRadius: 0 }}
                className={isHovered ? 'show-image-overlay' : ''}
            >

                <Fade in={isHovered}>
                    <div>
                        <Card.Title style={{ visibility: isHovered ? undefined : 'hidden' }}>{title}</Card.Title>
                        <Card.Text style={{ visibility: isHovered ? undefined : 'hidden' }} dangerouslySetInnerHTML={{ __html: text || '' }} />
                        <ZitecButton
                            style={{ visibility: isHovered ? undefined : 'hidden' }}
                            onClick={() => { navigate(buttonLink) }}
                            size='sm'
                        >
                            {buttonText}
                        </ZitecButton>
                    </div>
                </Fade>

            </Card.ImgOverlay>
        </Card>
    );
}