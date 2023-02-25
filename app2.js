
const zoomElement = document.querySelector('.zoom')
const fadeElement = document.querySelector('.fade')
const afterZoomElement = document.querySelector('.afterzoom')
const imgElement = document.querySelector('img')
const WIDTH = document.body.clientWidth       //  1903   it ic changing
const HEIGHT = zoomElement.clientHeight       //   100% so always 937
const IMAGE_HEIGHT = imgElement.clientHeight  //   always 150
const IMAGE_WIDTH = imgElement.clientWidth    //   always 150
const ZOOM_SPEED = 100 // Lower is faster
const ZOOM_BREAKPOINT = WIDTH / IMAGE_WIDTH // When it should stop zooming in
const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT
const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED // Absolute position, when the Element reached maximum size

// Fade --------------------------------------------------------------------------------------
const FADE_SPEED = 500 // Lower is faster
let fade = 1
let prev = 0
// -------------------------------------------------------------------------------------- Fade

function anim() {
    console.log(WIDTH)

    let scroll = window.scrollY
    
    let temp = scroll / ZOOM_SPEED
  
    let zoom = temp > 1 ? temp : 1

    // Only update the Elements scale, when we are below the breakpoint
    if (zoom < ZOOM_BREAKPOINT) {
        // Only scale the Image, so the Zoom element does not mess with the document width
        imgElement.style.transform = `scale(${zoom})`
        // Sets the Elements position to fixed, so it can resize without scrolling away
        zoomElement.style.top = '0px'
        zoomElement.style.position = 'fixed'
    } else {
        // Makes sure the Element always reaches Max Size
        imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`
        // Sets the elements position to absolute, so it will scroll with the rest of the document
        zoomElement.style.position = 'absolute'
        zoomElement.style.top = ABSOLUTE + 'px'
    }

    // Fade --------------------------------------------------------------------------------------
    // let dif = prev - scroll

    // if (zoom < ZOOM_BREAKPOINT - FADE_SPEED / ZOOM_SPEED) {
    //     fade = 1
    // } else if (zoom > ZOOM_BREAKPOINT) {
    //     fade = 0
    // } else {
    //     fade += dif / FADE_SPEED
    // }

    // fadeElement.style.opacity = fade
    // prev = scroll
    // -------------------------------------------------------------------------------------- Fade
}

// Resets scroll position on every reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

document.addEventListener('scroll', () => window.requestAnimationFrame(anim))

// Fade --------------------------------------------------------------------------------------
zoomElement.style.opacity = 1
// -------------------------------------------------------------------------------------- Fade

// Positions the afterZoom element right below the zoomed image
afterZoomElement.style.top = ABSOLUTE + IMAGE_HEIGHT_MAX / 2 + HEIGHT / 2 + 'px'