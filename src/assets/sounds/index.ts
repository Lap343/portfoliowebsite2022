// Npm imports
import { Howl } from 'howler';
// Sound imports
import closeSnd from './close.wav';
import openSnd from './open.wav';
import switchCloseSnd from './switchClose.wav';
import switchOpenSnd from './switchOpen.wav';

export let open = new Howl({
    src: [openSnd]
});

export let close = new Howl({
    src: [closeSnd]
});

export let switchOpen = new Howl({
    src: [switchCloseSnd]
});

export let switchClose = new Howl({
    src: [switchOpenSnd]
});