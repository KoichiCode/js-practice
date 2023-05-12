const options = {
    perMove: 1, 
    gap: 16,
    cover: true,
    heightRatio: 0.5,
    updateOnMove: true,
    padding: '5rem',
    type: 'loop',
    focus:'center',
}

const splide = new Splide( '.splide',options );
splide.mount();