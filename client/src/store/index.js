import { proxy } from 'valtio';

const state = proxy({
    intro: true, // check if on homepage
    color: '#EFBD48',
    isLogoTexture: true, // checks for texture on shirt
    isFullTexture: false, //
    logoDecal: './threejs.png', // initial decal
    fullDecal: './threejs.png', // 
});

export default state;