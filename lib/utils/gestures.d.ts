// tslint:disable:variable-name Describing an API that's defined elsewhere.

import {timeOut, microTask} from './async.js';

import {Debouncer} from './debounce.js';

export {deepTargetFind};


/**
 * Finds the element rendered on the screen at the provided coordinates.
 *
 * Similar to `document.elementFromPoint`, but pierces through
 * shadow roots.
 *
 * @returns Returns the deepest shadowRoot inclusive element
 * found at the screen position given.
 */
declare function deepTargetFind(x: number, y: number): Element|null;

export {addListener};


/**
 * Adds an event listener to a node for the given gesture type.
 *
 * @returns Returns true if a gesture event listener was added.
 */
declare function addListener(node: EventTarget, evType: string, handler: (p0: Event) => void): boolean;

export {removeListener};


/**
 * Removes an event listener from a node for the given gesture type.
 *
 * @returns Returns true if a gesture event listener was removed.
 */
declare function removeListener(node: EventTarget, evType: string, handler: (p0: Event) => void): boolean;

export {register};


/**
 * Registers a new gesture event recognizer for adding new custom
 * gesture event types.
 */
declare function register(recog: GestureRecognizer): void;

export {setTouchAction};


/**
 * Sets scrolling direction on node.
 *
 * This value is checked on first move, thus it should be called prior to
 * adding event listeners.
 */
declare function setTouchAction(node: EventTarget, value: string): void;

export {prevent};


/**
 * Prevents the dispatch and default action of the given event name.
 */
declare function prevent(evName: string): void;

export {resetMouseCanceller};


/**
 * Reset the 2500ms timeout on processing mouse input after detecting touch input.
 *
 * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
 * This method should only be called during testing with simulated touch inputs.
 * Calling this method in production may cause duplicate taps or other Gestures.
 */
declare function resetMouseCanceller(): void;

import {GestureRecognizer} from '../../interfaces';

export interface GestureEvent extends Event {
    x: number;
    y: number;
    sourceEvent: Event;
}

export interface DownEvent extends GestureEvent {
}

export interface UpEvent extends GestureEvent {
}

export interface TapEvent extends GestureEvent {
    model: any;
    detail: {
        sourceEvent: Event;
        x: number;
        y: number;
    }
}

export interface TrackEvent extends GestureEvent {
    detail: TrackEventDetail;
}

export interface TrackEventDetail {
    /**
         * state - a string indicating the tracking state:
         * - start - fired when tracking is first detected (finger/button down and moved past a pre-set distance threshold)
         * - track - fired while tracking
     * - end - fired when tracking ends
    */
    state: "start" | "track" | "end";
    /** clientX coordinate for event */
    dx: number;
    /** change in pixels vertically since the first track event */
    dy: number;
    /** change in pixels horizontally since last track event */
    ddx: number;
    /** change in pixels vertically since last track event */
    ddy: number;
    /** a function that may be called to determine the element currently being hovered */
    hover(): Element;
}