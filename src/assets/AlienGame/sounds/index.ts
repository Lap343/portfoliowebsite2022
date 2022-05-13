// Npm imports
import { Howl } from 'howler';
// Sound imports
import winSnd from './win.wav';
import loseSnd from './lose.wav';
import lazer1Snd from './lazer1.wav';
import lazer2Snd from './lazer2.wav';
import lazer3Snd from './lazer3.wav';
import mainSnd from './mainTheme.wav';
import titleSnd from './titleTheme.wav';
import explode1Snd from './explode1.wav';
import explode2Snd from './explode2.wav';
import explode3Snd from './explode3.wav';

export let open = new Howl({
    src: [loseSnd]
});

export let close = new Howl({
    src: [winSnd]
});

export let lazer1 = new Howl({
    src: [lazer1Snd]
});

export let lazer2 = new Howl({
    src: [lazer2Snd]
});

export let lazer3 = new Howl({
    src: [lazer3Snd]
});

export let main = new Howl({
    src: [mainSnd],
    loop: true,
    volume: 0.3,
});

export let title = new Howl({
    src: [titleSnd]
});

export let explode1 = new Howl({
    src: [explode1Snd]
});

export let explode2 = new Howl({
    src: [explode2Snd]
});

export let explode3 = new Howl({
    src: [explode3Snd]
});
