const contentInfoVariant = {
    visible: (custom: number) => ({
        width: ['0em', '10em', '30em'],
        height: ['0.1em', '0.1em', '18em'],
        padding: ['0em 0em','0em 0em', '2em 1em'],
        left: ['10em', `${10 + (custom * 5)}em`, `${15 + (custom * 5)}em`],
        transition: { duration: 1 }
    }),
    exit: (custom: number) => ({
        width: ['30em', '10em', '0em'],
        height: ['18em', '0.1em', '0.1em'],
        padding: ['2em 1em','0em 0em', '0em 0em'],
        left: [`${15 + (custom * 5)}em`, `${10 + (custom * 5)}em`, '10em'],
        transition: { duration: 1 }
    })
};

export default contentInfoVariant;