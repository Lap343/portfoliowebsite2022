const contentInfoVariant = {
    visible: (custom: number) => ({
        width: ['0em', '10em', '45em'],
        height: ['0.1em', '0.1em', '42em'],
        left: ['10em', `${10 + (custom * 5)}em`, `${15 + (custom * 5)}em`],
        transition: { duration: 1.5 }
    }),
    exit: {
        scale: [1, 1.1, 0],
        transition: { duration: 0.35 }
    }
};

export default contentInfoVariant;